/* Ruta: /api/users */

const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/users.controller')

const router = Router();

router.get('/api/users', getUsers );
router.post('/api', createUser );



module.exports = router;