const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup:{
	type: String,
	required:[true, "set up field is required"],
	minlength:[10, "set up field should be at least 10 characters"]
}, 
	punchline:{
		type: String,
		required:[true,"punchline field is required"],
		minlength:[3,"pnchline field should be at least 3 characters"]
	} 
});

const Joke =  mongoose.model("Joke", JokeSchema)

module.exports = Joke;