import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  try {
    const payload = req.body;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "rajathdev12@gmail.com",
        pass: process.env.NEXT_PUBLIC_GMAIL_APP_PASSWORD,
      },
    });
    // send mail with defined transport object
    let info = {
      from: `${payload.name} ${payload.email}`, // sender address
      to: "rajath365@gmail.com",
      subject: "Contact Form", // Subject line
      text: payload.message, 
    };
    await transporter.sendMail(info)
    res.status(200).json({ message: 'Message sent successfully' });
  } catch(error) {
    res.status(400).json({ error });
  }
}