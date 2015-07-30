var mongoose = require('mongoose');

//Schema Definition
var superHeroSchema = mongoose.Schema({
	name		: String,
	superPowers : [ {type : String} ],
	cape		: Boolean
})  

//Create the model and collection for superheroes
var SuperHeroes = mongoose.model('superheroes', superHeroSchema);


module.exports = SuperHeroes;