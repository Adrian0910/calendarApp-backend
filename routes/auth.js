
/* 
    user routes / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { newUser, loginUser, renewToken } = require('../controllers/auth');


router.post('/new', newUser); 

router.post('/', loginUser);

router.get('/renew', renewToken);


module.exports = router;

