module.exports.checkPermission = (req) => {
    const permissionName = req.originalUrl.split('/').slice(1).join('.');

    // Check if the user has Super Admin role
    if (req.user?.roles.some(role => role.name === process.env.SA_ROLENAME)) {
        return true;
    }

    // Use a Set for faster permission lookup
    const userPermissions = new Set(req.user?.roles.flatMap(role => role.permissions));

    // Check if the required permission is present
    return userPermissions.has(permissionName);
};
