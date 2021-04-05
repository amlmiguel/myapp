const express = require('express');
const router = express.Router();
const usuarioControllers = require('../controllers/usuariosControllers')

/* GET users listing. */
router.get('/', usuarioControllers.index);

module.exports = router;
