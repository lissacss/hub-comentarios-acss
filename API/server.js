const express = require ( 'express');
const bodyParser = require ( 'body-parser' );
const mysqli = require ( 'mysql');
const cors = require ( 'cors' );
const { Server } = require('http');
require ('dotenv').config()

const servevr = express();

Server.use(express.json());
Server.use(express.urlencoded({extended: true}));
Server.use(cors())
servevr.use(bodyParser.json());

const PORT = 7000;

servevr.listen( PORT, () => {
    console.log ( `O server está rodando em http:\\localhost ${ PORT }` )
});