const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Database Online');
    } catch (err) {
        console.log(err);
        throw new Error('Error a la hora de iniciar la base de datos')
    }

}

module.exports = {
    dbConnection
}