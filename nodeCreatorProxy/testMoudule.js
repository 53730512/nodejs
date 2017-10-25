
function test()
{
	this.e = 1;
	this.a = 3;
	this.b = function()
	{
		console.log("bbbb");
	}
	
	this.c = function()
	{
		console.log("cccc");
	}
	
}
module.exports = test;