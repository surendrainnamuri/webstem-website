// ContactForm.jsx

import React from 'react';

class ContactForm extends React.Component {
    // Other methods and logic

    sendConfirmationEmail(email) {
        const emailDetails = {
            from: 'info@webstem.in',
            to: email,
            subject: 'Confirmation of Your Submission',
            text: 'Thank you for contacting us! We will get back to you soon.',
        };

        // Logic to send email
    }

    // Other methods and logic
}

export default ContactForm;