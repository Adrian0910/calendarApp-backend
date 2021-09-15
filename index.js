
const express = require('express');
require('dotenv').config();

console.log( process.env );
// Create express server
const app = express();


// Public dir
app.use( express.static('public') );

//Routes
app.use('/api/auth', require('./routes/auth') );
// TODO: CRUD: events

// listener
app.listen( process.env.PORT, () => {
    console.log(`Server running port ${ process.env.PORT }`);
});


