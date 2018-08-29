require('dotenv').config();
const express = require('express');
const app = express();
var cors = require('cors');
const bodyParser = require('body-parser');

const helmet = require('helmet')
app.use(helmet())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

const securityroute = require('./config/securityroute');
app.use(securityroute);

require('./src/routes/index')(app)

    app.listen(5000, () => {
        console.log('Servidor Iniciado na porta 5000');
    });


module.exports = app;
