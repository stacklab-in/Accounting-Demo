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
            isDeleted: false,
            userType: "ADMIN"
        });

        // If super admin does not exists, create new with default creds
        if (!isAdminExists) {

            // Create a Role 
            const role = await Role.create({
                name: process.env.A_ROLENAME,
                description: 'Admin',
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
                userType: "ADMIN",
                roleId: role._id,
                permissions: {
                    sales: { r: true, u: true },
                    purchase: { r: true, u: true },
                    payment: { r: true, u: true },
                    receipt: { r: true, u: true },
                    expenditure: { r: true, u: true },
                    product: { r: true, u: true },
                    customer: { r: true, u: true },
                    vendor: { r: true, u: true },
                    employee: { r: true, u: true },
                    offer: { r: true, u: true },
                    reports: { r: true, u: true },
                    settings: { r: true, u: true },
                }
            })

        };

    } catch (error) {
        serverLogger("error", { error: error.stack || error.toString() });
        throw error;
    }
}

init();