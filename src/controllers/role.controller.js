
const Role = require("../models/Role");
const { auditLogger, serverLogger } = require("../utils/loggerWinston");
const utils = require("../utils/checkPermission");

module.exports.list = async (req, res) => {
    auditLogger(`Roles List requested by :`);

    try {
        // // First Check all the permissions and then proceed with them
        // const hasPermission = utils.checkPermission(req, res);

        // if (!hasPermission) {
        //     return res.status(403).json({ error: "You are not authorized to perform this request!!" });
        // };

        const allRoles = await Role.find({}, { createdAt: 0, updatedAt: 0, __v: 0 });
        return res.status(200).json({ status: true, msg: "Role List!", data: allRoles });
    } catch (error) {
        console.error(error);
        serverLogger("error", { error: error.stack || error.toString() });
        return res.status(500).json({ error: error.msg || "Internal Server Error" });
    }
};



module.exports.add = async (req, res) => {
    try {
        const body = req.body;

        const newRole = await Role.create({
            name: body.roleName,
            defaultRole: body.defaultRole ?? false,
            description: body.description,
            permissions: []
        });

        return res.status(201).json({ status: true, msg: "New role created!", data: newRole });
    } catch (error) {
        console.log(error)
        return res.send({ error: error.msg });
    }
};

module.exports.update = async (req, res) => {
    try {
        const { id, name, defaultRole, description, permissions } = req.body;

        const updatedRole = await Role.findByIdAndUpdate(
            id,
            {
                ...(name && { name }),
                ...(defaultRole && { defaultRole }),
                ...(description && { description }),
                ...(permissions && { permissions }),
            },
            { new: true }
        );

        return res.status(200).json({ status: true, msg: "Role updated!", data: updatedRole });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
