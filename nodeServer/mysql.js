var mysql  = require('mysql');  //����MySQLģ��

var connection = mysql.createConnection({    

	host     : '127.0.0.1',       //����
	user     : 'root',               //MySQL��֤�û���
	password : '1234',
	port: '3306',                   //�˿ں�

});

connection.connect(function(err){
if(err){       
console.log('[query] - :'+err);
return;
}
console.log('connect succeed!');
}); 