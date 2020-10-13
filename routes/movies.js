var express = require('express');
var router = express.Router();


const moviesController  = require('../controller/moviesController')
router.get('/', moviesController.all);
router.get('/detail/:id', moviesController.detail);
router.get('/create', moviesController.create);
router.post('/create', moviesController.add);
router.get('/edit/:id', moviesController.edit)
router.post('/edit/:id', moviesController.change)
router.delete('/delete/:id', moviesController.delete)

module.exports = router;