const path = require('path');

const express = require('express');
const rutas = require('./rutas');

const app = express();
const port=3000;

app.use('/assets',express.static(path.join(__dirname,'assets')));

rutas(app); // '/' y '*'

app.listen(port,function(){
    console.log('app is running in port '+port)
});