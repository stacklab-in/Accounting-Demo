// emailService.js

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log("🚀 ~ sgMail:", sgMail)


// Function to send email
const sendEmail = async (toEmail, inviteLink) => {
    try {
        // Send email
        const info = await sgMail.send({
            from: process.env.MAIL_USER, // Sender's email address
            to: toEmail, // Recipient's email address
            subject: 'Invitation to join our platform', // Email subject
            text: `Hello, You have been invited to join our platform. Click on the following link to create your account: ${inviteLink}. Thank you!`,
            html: `<p>Hello,</p><p>You have been invited to join our platform. Click on the following link to create your account:</p><p><a href="${inviteLink}">${inviteLink}</a></p><p>Thank you!</p>` // Email body
        });
        console.log('Email sent:', info);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
