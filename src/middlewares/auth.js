const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports.auth = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) return res.status(403).json({ error: "Provide Authorization Header!" });

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.APP_SECRET, async (err, decoded) => {
        if (err) return res.status(403).json({ error: "Invalid Authentication Token!" }); //invalid token

        const user = await User.findOne({ email: decoded.email, isDeleted: false }).populate('roleId');

        if (!user) {
            return res.status(400).json({ error: "User not found!" });
        };

        req.user = user;
        next();
    });
};
