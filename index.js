const express = require("express")
const bodyParser = require("body-parser")
const nodemailer = require("nodemailer")
const cors = require('cors');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( ({
    extended: false
})));
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};


app.post("/api/form", (req, res) => { 
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = ` 
        <h1>Email enviado desde portafolio</h1>
        <ul>
        <li>Nomabre : ${req.body.name} </li>
        <li>Email : ${req.body.email}</li>
        
        </ul>
        <h2>Mensaje</h2>
        <h5>Asunto : ${req.body.asunto}</h5>
        `;
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com" ,
          port: "587",
          auth: {
              user: process.env.user,
              pass : process.env.password
          }
        });

        let mailOptions = {
            from : "romerotamara.sol@gmail.com",
            to: req.body.email,
            replyTo: "luz.nicole.maria@gmail.com",
            subject : req.body.nombre,
            text: req.body.asunto,
            html : htmlEmail,
            envelope: {
                from: 'Daemon <romerotamara.sol@gmail.com>', // used as MAIL FROM: address for SMTP
                to: 'luz.nicole.maria@gmail.com, Mailer <luz.nicole.maria@gmail.com>' // used as RCPT TO: address for SMTP
            }

        };
        transporter.sendMail(mailOptions, (err, info) =>{
            if (err) {
                return console.log(err);
            }
            console.log("mensaje enviado: %s");
            console.log("url de mensaje: %s", nodemailer.getTestMessageUrl(info));
        });
    });
});
const PORT = process.env.PORT || 3001 ;
 app.listen(PORT, () => {
     console.log(`servidor a la escucha del puerto ${PORT}`)
 })
//    "name": "PortafolioRomero",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "dependencies": {
//     "react-bootstrap": "^1.4.0"
//   },
//   "devDependencies": {},
//   "scripts": {
//     "start" : "node index.js",
//     "server" : "nodemon index.js",
//     "my-portafolio" : "npm run start --prefix my-portafolio",
//     "dev": "npm run dev"
//   },