var express = require('express');
var router = express.Router();

router.post('/suma', function(req, res) {
    const {val1,val2}=req.body;
    const valor1 = parseInt(val1, 10);
    const valor2 = parseInt(val2, 10);
    res.status(200).json({result:valor1+valor2, error: null});
});

router.post('/resta', function(req, res) {
    const {val1,val2}=req.body;
    const valor1 = parseInt(val1, 10);
    const valor2 = parseInt(val2, 10);
    res.status(200).json({result:valor1-valor2, error: null});
});


module.exports = router;