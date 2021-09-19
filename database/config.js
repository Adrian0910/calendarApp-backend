
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' })


const dbConnection = async() => {

    
    try {
        await mongoose.connect( 'mongodb+srv://mern_user:n12oPzDjCyw0K7Rm@cluster0.ln9tr.mongodb.net/mern_calendar' , {
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

