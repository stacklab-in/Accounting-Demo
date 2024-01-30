"use strict";


/*************************************************************
 * 
 *  Utility Module to Generate Ids for various models
 * 
 *************************************************************/
const mongoose = require("mongoose");
const nanoTime = require("nano-time");

// Returns random Int between 0 to 10000
const _getRandomIntUptoTenK = () => {
    return Math.floor(Math.random() * 10001);
};

const newIdForRole = () => { return `R${Date.now()}`};
const newIdForPermission = () => { return `P${Date.now()}`};
const newIdForUser = () => { return `U${Date.now()}`};

const newIdForMongoObject = () => { return mongoose.mongo.ObjectId() };

module.exports = {
    newIdForMongoObject,
    newIdForRole,
    newIdForPermission,
    newIdForUser
};