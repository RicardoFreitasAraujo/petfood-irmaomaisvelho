const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//database
require('./database');

const app = express();

app.set('port', process.env.PORT || 8000);

//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Rotas
app.use('/', require('./routes/main.routes'));

app.listen(app.get('port'), () => {
    console.log('Server is UP');
});

