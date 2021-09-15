
const express = require('express');
require('dotenv').config();

console.log( process.env );
// Create express server
const app = express();


// Public dir
app.use( express.static('public') );

//Routes
/* app.get('/', (req, res) => {

    res.json({
        ok: true
    })
}); */

// listener
app.listen( process.env.PORT, () => {
    console.log(`Server running port ${ process.env.PORT }`);
});


