//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// create a new Express application instance
const app = express();
//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());
//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});
// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
    const data = req.body;
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
            user: "vaibhavpandeyprayag@gmail.com",
            pass: "itukypqwmkkidjkc",
        }
      });
      // verify connection configuration
    transporter.verify(function(error, info) {
        if (error) console.log(error);
        else {
            console.log("Server is ready to take our messages");
            const mailOptions = {
                from: `"${data.name}" ${data.email}`,
                to: `vaibhavpandeyprayag@gmail.com`,
                subject: `Message from ${data.name}.`,
                text: JSON.stringify(data),
            };
            transporter.sendMail(mailOptions);
        }
    });
});
