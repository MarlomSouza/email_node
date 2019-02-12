var nodemailer = require("nodemailer");

console.log("Email . js");

function Teste(params) {
    console.log(params)
    mailOptions.from = "naoResponde@gmail.com";
    mailOptions.to = params.to;
    mailOptions.subject = params.subject;
    mailOptions.text = params.corpo;

    console.log(mailOptions);
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
    });
}

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dtn3va2u67e3sxz6@ethereal.email',
        pass: 'Fygcvv4fSE26SeHtMr'
    }
});

let mailOptions = {
    from: '"Krunal Lathiya" <xx@gmail.com>', // sender address
    to: "",
    subject: "",
    text: "",
    html: '<b>NodeJS Email Tutorial</b>' // html body
};
