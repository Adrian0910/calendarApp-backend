
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' })


const dbConnection = async() => {

    
    try {
        await mongoose.connect( process.env.DB_CNN , {
            useNewUrlParser: true,
        });
        
        console.log('DB online');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }

}

module.exports = {
    dbConnection,
}

