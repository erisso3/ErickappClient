var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Eliminar', function(req, res, next) {
  res.render('Eliminar', { title: 'Prueba' });
});

module.exports = router;
