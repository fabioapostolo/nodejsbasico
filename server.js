const express = require('express'); //ligar as requisições http 
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./backend/routes/routes');
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

if(process.env.NODE_ENV === 'production'){
    //express vai entregar os assets de produção. Ex. main.js ou main.css na pasta build
    app.use(express.static('frontend/build'));

    //express vai entregar o index.html se não reconhecer a rota
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
}

const PORT = process.env.PORT;
app.listen(PORT);