
const AWS = require('aws-sdk'); // Load the SDK for JavaScript
const mailer = require("./mailer");
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

AWS.config.update({region: 'eu-east-1'}); 
app.post('/api/contact', (req, res, next) => {
    return mailer.sendMail('sender@email.com', ['reciever@email.com'], req.body)
      .then(() => res.send(req.body))
      .catch(next);
  });
  
  app.listen(port, () => console.log(`Listening on port ${port}`));