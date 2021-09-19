
const mongoose = require('mongoose');

const dir = process.env.DB_CNN

const dbConnection = async() => {

    console.log(dir.toString())
    try {
        await mongoose.connect( dir.toString() , {
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

