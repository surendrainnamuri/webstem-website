const nodemailer = require('nodemailer');

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // replace with your email
        pass: 'your-email-password' // replace with your email password
    }
});

module.exports = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configure the email options
        const mailOptions = {
            from: email,
            to: 'info@webstem.in',
            subject: `Contact Form Submission from ${name}`,
            text: message,
        };

        // Send the email
        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ status: 'Message sent' });
        } catch (error) {
            return res.status(500).json({ error: 'Failed to send message' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
};