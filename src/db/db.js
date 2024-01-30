"use strict";
const { serverLogger } = require("../utils/loggerWinston");

/***************************************************************
 * Module to initialize a MongoDB database connection
 * This is achieved using the npm mongoose module for MongoDB
 ***************************************************************/

const mongoose = require("mongoose");
const User = require("../models/User");
const Role = require("../models/Role");

async function init() {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        serverLogger("info", `Database Connection Successful!`);

        // Check if super admin system account exists
        let isAdminExists = await User.exists({
            email: process.env.A_EMAIL,
            isDeleted: false
        });

        // If super admin does not exists, create new with default creds
        if (!isAdminExists) {

            // Create a Role 
            const role = await Role.create({
                name: process.env.A_ROLENAME,
                email: process.env.A_EMAIL,
                description: 'Admin',
                permissions: {},
            });

            // // Add a Role
            // await Role.create({
            //     name: 'CUSTOMER',
            //     description: 'Customer',
            //     permissions: {},
            // });

            // Create Firebase Account for this A
            await User.create({
                name: process.env.A_NAME,
                email: process.env.A_EMAIL,
                password: process.env.A_PASSWORD,
                roles: [role._id]
            })

        }
    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        throw error;
    }
}

init();