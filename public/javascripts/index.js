var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about');
});

router.get('/decorate', function(req, res, next) {
    res.render('decorate');
});
router.get('/designer', function(req, res, next) {
    res.render('designer');
});

router.get('/works', function(req, res, next) {
    res.render('works');
});
router.get('/plot',function(req,res,next){
    res.render('plot')
})

module.exports = router;
