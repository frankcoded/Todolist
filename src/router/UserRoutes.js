const router = require('express').Router();

const controller = require('../controller/UserController');

router
.get('/', controller.getAllUsers);
Post('/',controller.createUser);
Put('/:id',controller.createUser);
delete('/:id',controller.createUser);



module.exports = router;