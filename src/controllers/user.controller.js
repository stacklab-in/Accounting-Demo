const Role = require("../models/Role");
const User = require("../models/User");
const PasswordCreateRecord = require("../models/PasswordCreateRecord");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { serverLogger } = require('../utils/loggerWinston');
const { sendEmail } = require('../utils/emailService');
const { v4: uuidv4 } = require('uuid');
const { permissionForAdmin, permissionForManager } = require("../utils/constants");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

module.exports.add = async (req, res) => {
    const session = await mongoose.startSession();
    let isSuccess = false;
    let isDBTransactionInProgress = false;

    try {

        const requestBody = req.body;

        // Start transaction
        session.startTransaction();
        isDBTransactionInProgress = true;

        // Find the user with email address
        const existingUser = await User.findOne({ email: requestBody.email }).session(session);

        existingUser.isActive = true;
        existingUser.password = requestBody.password;
        // ADD PERMISSSIONS
        existingUser.permissions = existingUser.userType === 'ADMIN' ? permissionForAdmin : permissionForManager

        existingUser.save();

        // Make the password reset table entry from isUsed false to true
        const passwordCreateRecord = await PasswordCreateRecord.findOne({ email: requestBody.email, isUsed: false }).session(session);
        passwordCreateRecord.isUsed = true;
        await passwordCreateRecord.save();

        // Generating JWT  
        let accessToken = jwt.sign({ userId: existingUser._id.toString(), email: existingUser.email }, process.env.APP_SECRET, { expiresIn: '7d' });

        // Commit the transaction
        await session.commitTransaction();
        isSuccess = true;

        // send response to  existingUser is successfully logged in
        return res.status(200).send({ status: true, message: "User logined successfully", data: { accessToken, user: existingUser } });
    } catch (error) {
        console.log({ error });
        serverLogger("error", { error: error.stack || error.toString() });
        res.status(400).json({ error: error.toString() });
    } finally {
        isSuccess ? undefined : (isDBTransactionInProgress ? await session.abortTransaction() : undefined);
        // End the session
        session.endSession();
    };
}

module.exports.getPasswordTableDetails = async (req, res) => {
    try {
        const requestBody = req.body;
        if (!requestBody.email) return res.status(400).json({ status: false, error: "Please provide email" });

        const passwordCreateRecord = await PasswordCreateRecord.findOne({ email: req.body.email, isUsed: false });

        if (!passwordCreateRecord) {
            return res.status(404).json({
                status: false,
                error: "No record found for the given email"
            });
        };

        return res.status(200).json({ msg: 'Password reset record fetched successfully', data: passwordCreateRecord });

    } catch (err) {
        console.error(err);
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({ status: false, error: `${err.message}` });
    }
}

module.exports.login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email, password: req.body.password }).populate('roleId');

        if (!user) {
            return res.status(404).json({ error: "Invalid credentials.." });
        };

        // Generating JWT  
        let accessToken = jwt.sign({ userId: user._id.toString(), email: user.email }, process.env.APP_SECRET, { expiresIn: '7d' });

        // send response to  user that Author is successfully logged in
        return res.status(200).send({ status: true, message: "User logined successfully", data: { accessToken, user } });

    } catch (err) {
        // Implement logger function if any
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.update = async (req, res) => {
    try {
        const requestBody = req.body;

        //  Update the user data as name ,mobileNumber and profileImage if they come
        const dataToUpdate = {};

        if (requestBody.name) dataToUpdate.name = requestBody.name;
        if (requestBody.mobileNumber) dataToUpdate.mobileNumber = `+91${requestBody.mobileNumber}`;
        if (requestBody.role) dataToUpdate.role = requestBody.role;



        // Write a code to upload the image in AWS S3 and then update the link to profileImage
        // Upload the image to AWS S3
        // const s3Client = new S3Client({
        //     region: process.env.AWS_REGION,
        //     credentials: {
        //         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        //         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
        //     }
        // });



        // const fileContent = req.file.buffer; // Assuming you're using multer to handle file uploads
        // const params = {
        //     Bucket: process.env.AWS_BUCKET_NAME,
        //     Key: `profile-images/${userId}`, // S3 key where the image will be stored
        //     Body: fileContent
        // };

        // const uploadCommand = new PutObjectCommand(params);
        // const uploadResult = await s3Client.send(uploadCommand);

        // Update the link to profileImage
        // dataToUpdate.profileImage = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/profile-images/${userId}`;


        // update the user
        // const updatedUser = await User.findByIdAndUpdate(req.requestBody.id, , { new: true });
        console.log('dataToUpdate', dataToUpdate);
        const updatedUser = await User.findOneAndUpdate({ _id: requestBody.id, isDeleted: false },
            {
                $set: dataToUpdate
            }, { new: true });
        console.log("🚀 ~ module.exports.update= ~ updatedUser:", updatedUser)


        if (!updatedUser) {
            return res.status(404).json({
                status: false,
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "User updated successfully",
            data: updatedUser
        });
    } catch (err) {
        console.error(err);
        // Implement logger function if any
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.updateRolesAndDetails = async (req, res) => {
    try {
        const requestBody = req.body;

        const user = await User.findOne({ _id: requestBody.id, isDeleted: false });
        if (!user) return res.status(404).json({ status: false, error: "User not found" });

        // update the user
        user.name = requestBody.name;
        const roleObj = await Role.findOne({ name: requestBody.role });
        user.roleId = roleObj._id;

        const convertedObject = requestBody.permissions.reduce((acc, item) => {
            acc[item.moduleName] = {
                r: item.permissions.r,
                u: item.permissions.u
            };
            return acc;
        }, {});

        user.permissions = convertedObject;

        await user.save();

        return res.status(200).json({ status: true, message: "User updated successfully", data: {} });
    } catch (err) {
        console.log(err);
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({ status: false, error: `${err.message}` });
    }


}

module.exports.delete = async (req, res) => {
    try {
        const userId = req.body.id;

        // delete the user
        const deletedUser = await User.findByIdAndUpdate(userId,
            {
                isDeleted: true,
                deletedAt: new Date
            }, { new: true });

        if (!deletedUser) {
            return res.status(404).json({
                status: false,
                error: "User not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "User deleted successfully",
            data: deletedUser
        });

    } catch (err) {
        console.error(err);
        // Implement logger function if any
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.getProfile = async (req, res) => {
    try {
        return res.status(200).json({ status: true, user: req.user })
    } catch (err) {
        console.error(err);
        serverLogger("error", { error: err.stack || err.toString() });
        // Implement logger function if any
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.list = async (req, res) => {
    try {
        // delete the user
        const usersList = await User.find({ isDeleted: false }).sort({ createdAt: -1 }).populate('roleId');

        return res.status(200).json({
            status: true,
            message: "User List",
            data: usersList
        });

    } catch (err) {
        console.error(err);
        // Implement logger function if any
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({
            status: false,
            error: `${err.message}`
        });
    }
};

module.exports.sendInviteLink = async (req, res) => {
    try {
        const requestBody = req.body;

        if (!requestBody.users || requestBody.users.length === 0) {
            return res.status(400).json({
                status: false,
                error: "Please provide the list of users to send the invite link"
            });
        };

        // Now loop over the users array and check if they are already present in the user record of our database
        // If they are present, then we will not send the invite link to them
        for (let user of requestBody.users) {
            const existingUser = await User.findOne({ email: user.email });
            if (existingUser) {
                return response.status(400).json({
                    status: false,
                    error: `User with email ${user.email} is already present in the system`
                });
            };

            // Create a record in the database for each user
            const newUser = new User({
                name: user.name,
                email: user.email,
                onBoardedBy: req.user._id,
                userType: user.role
            });

            // Find Role and save id to the role 
            const role = await Role.findOne({ name: user.role });
            if (!role) {
                return res.status(400).json({
                    status: false,
                    error: `Role not found!`
                });
            };

            newUser.roleId = role._id;

            await newUser.save();

            // Generate a unique token
            const uniqueToken = uuidv4();

            // Set expiry date to 15 minutes from now
            const expiryDate = new Date();
            expiryDate.setMinutes(expiryDate.getMinutes() + 15);

            // Create a record in the passwordCreateRecord collection
            const passwordCreateRecord = new PasswordCreateRecord({
                email: user.email,
                createdBy: req.user._id,
                expiryDate: expiryDate,
                uuidCode: uniqueToken
            });
            await passwordCreateRecord.save();

            // Send the invite link to the user
            // const inviteLink = `http://localhost:3033/auth/jwt/register?name=${user.name}&email=${user.email}?uuid=${uniqueToken}`;
            const inviteLink = `https://accounting-demo.vercel.app/auth/jwt/register?name=${user.name}&email=${user.email}?uuid=${uniqueToken}`;
            await sendEmail(user.email, inviteLink);
        };


        return res.status(200).json({
            status: true,
            message: "Invite link sent successfully",
            data: {}
        });

    } catch (err) {
        serverLogger("error", { error: err.stack || err.toString() });
        return res.status(500).json({ status: false, error: 'INTERNAL SERVER ERROR' });
    }
}