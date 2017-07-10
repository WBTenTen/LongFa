/**
 * Created by 123 on 2017/7/10.
 */
var express = require('express');
var router = express.Router();
var conn = require("../mysql/db");

router.get("/",function(req,res){
    var sql = "SELECT * FROM sjs";
    conn.query(sql,function(err,result){
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