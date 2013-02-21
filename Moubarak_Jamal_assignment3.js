// alert("JavaScript works!");

// Jamal Moubarak
// Project 3
// SDI 1302

var handleData = function (json) {
	for (var i = 0; i < json.clients.length; i++){
		var client = json.clients[i];
		console.log("Phone Number: " + client.number + ", Name: " + client.name + ", Type of System: " + client.system + ", Missed Calls Today: " + client.missedCalls);
	};
};

handleData(json2);