var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'anli'
})

conn.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("链接成功");
    }
})
module.exports = conn;
