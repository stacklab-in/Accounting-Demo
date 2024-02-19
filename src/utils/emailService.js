// emailService.js

const nodemailer = require('nodemailer');

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOSTNAME,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
        user: process.env.MAIL_USER, // Your email address
        pass: process.env.MAIL_PASSWORD // Your email password or app password if using Gmail
    }
});

// Function to send email
const sendEmail = async (toEmail, inviteLink) => {
    try {
        // Send email
        const info = await transporter.sendMail({
            from: process.env.MAIL_USER, // Sender's email address
            to: toEmail, // Recipient's email address
            subject: 'Invitation to join our platform', // Email subject
            html: `<p>Hello,</p><p>You have been invited to join our platform. Click on the following link to create your account:</p><p><a href="${inviteLink}">${inviteLink}</a></p><p>Thank you!</p>` // Email body
        });
        console.log('Email sent:', info);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
