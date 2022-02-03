const nodemailer = require('nodemailer');

const sendmail = async (options) => {
    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: '587',
        auth: {
            user: 'usertodo2@gmail.com',
            pass: 'Densoft1'
        }
    });

    const message = {
        from: `TvShow <usertodo2@gmail.com>`,
        to: options.email,
        subject: options.subject,
        text: options.message
    }

    await transport.sendMail(message);
}

module.exports = sendmail;