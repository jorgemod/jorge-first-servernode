const express = require('express')
const app = express() //uso de express
const hbs = require('hbs');
require('./hbs/helpers');

////////////////////configuracion PUERTO/////////////////////
//de esta forma obtenemos el puerto que nos de heroku o en su defecto el puerto 3k
const port = process.env.PORT || 3000;

////////////////////////////////////////////////


app.use(express.static(__dirname + '/public')); //directorio publico
//hbs engine //////////////
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => { //aceptamos todas las solicitudes que entren de slash
    // res.send('hola mundo');

    res.render('home', { //render lo ocupamos para renderizar una vista
        nombre: 'jorGe juarez',

    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => { //configuracion del puerto del servidor por el cual vamos a escuchar
    console.log(`escuchando en el puerto ${port}`);
})