import nodemailer from 'nodemailer';
import 'dotenv/config';

export const sendMessage = async (req, res) => {
    const output = `
        Contact Details
        Fullname : ${req.body.name} ${req.body.lastname}
        Telephone : ${req.body.tel}
        Message : ${req.body.message}
    `
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.CONTACT_MAIL,
            pass: process.env.CONTACT_PASSWORD
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'relq.test@gmail.com',
        subject: `You have a new message from ${req.body.email}`,
        text: output
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error')
        } else {
            console.log(`Email sent : ${info.response}`);
            console.log(`dd : ${info}`);
            res.send('success')
        }
    })
}