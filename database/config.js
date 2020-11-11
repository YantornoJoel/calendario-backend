const mongoose = require('mongoose');

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('DB Conectada')

    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciarlizar la base de datos')
    }
}

module.exports = {
    dbConnection 
}