//13 de febrero del 2023
// const version= require('./animal');
// console.log(version);

const express = require('express');
const router = require('./src/routes');
const mongoose = require('mongoose');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUrl = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');

require('dotenv').config();

const app = express();

const mongoUrl = process.env.MONGO_URL;

const port=process.send.PORT || 3000;

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger',swaggerUrl.serve, swaggerUrl.setup(swaggerDocs));

app.use('/',router); //uso el middleware de /t y /u

 mongoose.connect(mongoUrl).then(()=>{
    console.log('Se conecto correctamente a la base de datos');
    app.listen(port,function(){
        console.log('app is running in port '+port)
    });

 }).catch(err=>{
    console.log('No se pudo conectar a la base de datos',err);
 })

