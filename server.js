const express = require('express'); //ligar as requisições http 
const bodyParser = require('body-parser');
require('dotenv').config();
const routes = require('./backend/routes/routes');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.json({
        'success': true
    });
});

app.use('/api', routes);

app.listen(PORT);