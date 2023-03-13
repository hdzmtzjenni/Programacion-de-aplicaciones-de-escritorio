const axios = require('axios');
const apiKey = 'a78422626cc748d783413b7b753e799a' //Key para poder buscar noticias en news API
module.exports =function(app){
    app.get('/',function(req,res){
        console.log('Appi works');
        res.render('home',{
            nombre: 'Juan Perez'
        }); 
    })

    app.get('/buscar',function(req,res){ //Ruta para buscar noticias
        var articles= [];
        axios({ //Llamada de axios
            method:'get',
            baseURL:'https://newsapi.org/v2/everything',
            headers:{'Authorization': apiKey},
            params:{
                q:req.query.filtro, //Parámetro de búsqueda
            }
        })
        .then(function(response){ //Si la llamada funciona con éxito
            articles = response.data.articles;
            res.render('news',{ //Llamamos a news handlebars que tiene el formato para poner las noticias
                articles:articles,
                filtro:req.query.filtro
            })
        }).catch(function(error){
            console.log(error);
        })
    })
    
    app.get('*', function(req,res){
        res.status(404).send('Página no encontrada');
    });
}



