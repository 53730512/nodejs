var mysql  = require('mysql');  //调用MySQL模块

var connection = mysql.createConnection({    

	host     : '127.0.0.1',       //主机
	user     : 'root',               //MySQL认证用户名
	password : '1234',
	port: '3306',                   //端口号

});

connection.connect(function(err){
if(err){       
console.log('[query] - :'+err);
return;
}
console.log('connect succeed!');
}); 