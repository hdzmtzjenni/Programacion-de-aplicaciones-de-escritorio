
const path = require('path');


module.exports =function(app){
    app.get('/SobreMi', function(req,res){
        res.sendFile( path.join(__dirname,'src','views','SobreMi.html'));
    })

    app.get('/Mascotas', function(req,res){
        res.sendFile( path.join(__dirname,'src','views','Mascotas.html'));

    })

    app.get('/Hobbies', function(req,res){
        res.sendFile( path.join(__dirname,'src','views','hobbies.html'));

    })
    
    app.get('*', function(req,res){
        const ruta= path.join(__dirname,'src','views','NotFound.html');
        res.status(404).sendFile(ruta);
    });
}