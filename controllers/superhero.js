var SuperHeroes = require('../models/superheroes.js')

var superHeroController = {

	// Getting superheroes from the DB
	getHeroes : function(req, res){
		// var myHeroes = []
		console.log(req.body)
		SuperHeroes.find({}, function(err, heroes){

			if (err){
				res.send( {err : err} );
			}
			else{
				res.send( {data : heroes} )
			}
		});
		// console.log(myHeroes)
	},

	// Adding a new superhero to the DB
	createHero : function(req,res){
		// Post Request - Data comes in from req.body
		
		var hero = new SuperHeroes(req.body)

		hero.save(function(err,document){
			res.send({data : document})
		});
	}
}
module.exports = superHeroController