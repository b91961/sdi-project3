// alert("JavaScript works!");

// Jamal Moubarak
// Project 3
// SDI 1302

// Intro to Story	
console.log("It's 9am... My alarm clock is annoyingly chirping, " + 
			"so I open my eyes, reach over and grab my phone to find " + 
			"missed calls from 5 of my clients " + "Here is a list of the clients " + 
			"with their customer info and how many times they called:");

// Global variables
var system = ["DVR", "POS", "PC"],
	clients = ["Tony", "Cleo", "Fidel", "Benny", "Steve"];

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