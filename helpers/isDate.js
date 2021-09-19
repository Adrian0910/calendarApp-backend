
/* 
    Custome validation to express validation Date,
    call in routes --> events --> check validation
*/

const moment = require('moment');

const isDate = ( value ) => {

    if( !value ) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }

}

module.exports = {
    isDate
};

