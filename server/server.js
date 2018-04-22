require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      nmail = require('nodemailer');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`We be jammin to the tunes of ${PORT} mon`))