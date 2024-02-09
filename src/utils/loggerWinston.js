"use strict";

/***************************************************************
 * Module for logging. It uses winston package
 ***************************************************************/

// Require modules and functions
const { createLogger, transports, format } = require("winston");
// const path = require("path");

// // Set the logging format.
// const myFormat = format.combine(
//   format.timestamp({
//     format: "YYYY-MM-DD hh:mm:ss A ZZ",
//   }),
//   format.json()
// );

// // This logger is used to log the audit events (who did what and when)
// const _auditLogger = createLogger({
//   level: "info",
//   transports: [
//     new transports.File({
//       filename: path.join(process.env.LOG_DIRECTORY, "audit.log"),
//       maxsize: process.env.LOG_MAX_SIZE_BYTES,
//       format: myFormat,
//     }),
//   ],
// });

// This logger is used to log the audit events (who did what and when)
// const _fcmMessageLogger = createLogger({
//   // level: "info",
//   transports: [
//     new transports.File({
//       filename: path.join(process.env.LOG_DIRECTORY, "fcmMessage.log"),
//       maxsize: process.env.LOG_MAX_SIZE_BYTES,
//       format: myFormat,
//     }),
//   ],
// });

// This logger is used to log for server activities. Explore more
// const _serverLogger = createLogger({
//   level: "info",
//   transports: [
//     new transports.File({
//       filename: path.join(process.env.LOG_DIRECTORY, "server.log"),
//       maxsize: process.env.LOG_MAX_SIZE_BYTES,
//       format: myFormat,
//       handleExceptions: true,
//     }),
//   ],
// });


const auditLogger = async (message) => {
  // _auditLogger.log("info", message);
  console.log("info", message)
};

const serverLogger = async (type, message) => {
  // _serverLogger.log(type, message);
  console.log(type, message)
};



// Export the logger functions
module.exports = {
  auditLogger,
  //   fcmMessageLogger,
  serverLogger,
};
