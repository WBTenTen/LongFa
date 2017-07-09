var express = require('express');
var router = express.Router();
var conn = require("../mysql/db");

router.get("/",function(req,res){
    var sql = "SELECT * FROM zxgl";
    conn.query(sql,function(err,result){
        // console.log(123);
        console.log(result);
        if(err){
            return res.send({
                success:false,
                data:err.message
            })
        }
        res.send({
            success:true,
            data:result
        })
    })
});

module.exports = router;