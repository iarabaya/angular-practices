require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT

const { dbConnection } = require('./database/config');

//Crear el servidor de express
const app = express();

//Configurar CORS (middleware)
app.use(cors());

//Data Base
dbConnection();

//Paths
app.get('/', (req, res) =>{
    res.status(400).json({
        ok: true,
        msg: 'Hola mundo'
    });
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})