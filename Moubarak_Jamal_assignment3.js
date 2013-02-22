// alert("JavaScript works!");

// Jamal Moubarak
// Project 3
// SDI 1302

// Intro to Story	
console.log("It's 9am... My alarm clock is annoyingly chirping, " + 
			"so I open my eyes, reach over and grab my phone to find " + 
			"missed calls from 5 of my clients " + "Here is a list of the clients " + 
			"with their customer info and how many times they called:");

// Variables

var clientCalls = {

	"Tony": 8,
	"Cleo": 2,
	"Fidel": 1,
	"Benny": 5,
	"Steve": 4,
	"calls": function() {
		var totalMissedCalls = this.Tony + this.Cleo + this.Fidel + this.Benny + this.Steve;
		return totalMissedCalls;
	},
	"setBenny": function(newBenny){
		this.Benny = newBenny;
	},
};


// JSON Data
var handleData = function (json) {
	for (var i = 0; i < json.clients.length; i++){
		var client = json.clients[i];
		console.log("Phone Number: " + client.number + ", Name: " + client.name + ", Type of System: " + client.system + ", Missed Calls Today: " + client.missedCalls);
	};
};

handleData(json2);

var jsonstring = JSON.stringify(json);
// console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
// console.log(receivedjson);

console.log("I had a total of " + clientCalls.calls() + " missed calls from my clients all together");

clientCalls.setBenny(10);

console.log("Ten minutes after I checked I had " + clientCalls.calls());

// Conclusion to Story
console.log("If I need to visit my clients in the order of how many missed calls I received, " + "the order would be:");

// I couldn't find a simple way to sort these from highest to lowest

console.log("Tony, Benny, Steve, Cleo then Fidel.");