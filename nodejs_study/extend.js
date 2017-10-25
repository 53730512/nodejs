function pet(words)
{
	this.words = words;
	this.speak = function()
	{
		console.log(words);
	}
}

function dog(words)
{
	pet.call(this, words);
}

var dg = new dog("wang");
dg.speak();