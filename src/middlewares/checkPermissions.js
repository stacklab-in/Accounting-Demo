
/**
 * @DESC Check Role Middleware
 */

// const utils = require('../utils/checkPermission');
// const { serverLogger } = require("../utils/loggerWinston");

// module.exports.checkPermissions = () => async (req, res, next) => {
//     try {
//         // First Check all the permissions and then proceed with them
//         const hasPermission = utils.checkPermission(req);

//         if (!hasPermission) {
//             return res.status(403).json({ error: "You are not authorized to perform this request!!" });
//         };
//         next();
//     } catch (error) {
//         serverLogger("error", { error: error.stack || error.toString() });
//         return res.status(500).json({ error: error.message || 'Internal Server Error!' });
//     }
// };
const { transform, isObject, intersection, map } = require('lodash');
const User = require('../models/User');

/**
 * Check the required permissions for the route
 * @param requiredPermissions example: ['user.r', 'user.c']
 * @returns 
 */

module.exports.checkPermissions = (requiredPermissions) => {

    return async (req, res, next) => {
        if (!req.user) {
            res.status(401).send({ message: 'No user injected in the request' });
        }

        try {
            const user = await User.findOne({ roleId: req.user.roleId._id });

            if (!user) {
                res.status(403).send({ message: 'No user role found for the user!.' });
                return;
            };

            console.log(requiredPermissions.split('.')[0])
            console.log(requiredPermissions.split('.')[1])
            console.log(req.user.roleId.permissions);
            const key = requiredPermissions.split('.')[0]
            const nestedKey = requiredPermissions.split('.')[1]

            const isPermissionAllowed = req.user.roleId.permissions[key] && req.user.roleId.permissions[key][nestedKey] === true;
            console.log("🚀 ~ return ~ isPermissionAllowed:", isPermissionAllowed)

            if (isPermissionAllowed) {
                next();
            } else {
                res.status(403).send({ message: `Permissions needed for ${requiredPermissions} this route` });
            }
        } catch (error) {
            console.error('Error checking permissions:', error);
            res.status(500).send({ message: 'Internal Server Error' });
        }
    };
};




