var express = require('express');
var router = express.Router();
var conn = require('../mysql/db');
//接受模板数据
router.get('/',function(req,res){
    var sql = `SELECT * FROM mobanxiaoyang`;
    conn.query(sql,function(err,result){
        console.log(result)
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
})


module.exports = router