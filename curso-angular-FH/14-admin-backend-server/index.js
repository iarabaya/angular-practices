require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS (middleware)
app.use(cors());

//Lectura y parseo del body
app.use( express.json() );

//Data Base
dbConnection();

//Paths
app.use('/api/users', require('./routes/users.routes'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})