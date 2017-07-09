var express = require('express');
var router = express.Router();
var conn = require('../mysql/db');
//接受末班参数
router.get('/',function(req,res){
	var sql = `select * from plotmoban`
	conn.query(sql,function(err,result){
		if (err) {
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