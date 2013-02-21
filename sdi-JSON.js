// Jamal Moubarak
// Project 2
// SDI 1302

var json = {
	"client": {
		"4198061514": {
			"name": "Tony",
			"system": "DVR",
			"missedCalls": 8
		},
		"4194567890": {
			"name": "Cleo",
			"system": "POS",
			"missedCalls": 2
		},
		"5677890123": {
			"name": "Fidel",
			"system": "DVR",
			"missedCalls": 1	
		},
		"4194558877": {
			"name": "Benny",
			"system": "POS",
			"missedCalls": 5
		},
		"5676439489": {
			"name": "Steve",
			"system": "DVR",
			"missedCalls": 4
		}
	}

};

for (var key in json.clients) {
	var client = json.clients[key];
	//client.name
};



var json2 = {
	"clients": [
		{
			"number": "4198061514",
			"name": "Tony",
			"system": "DVR",
			"missedCalls": 8
		},
		{
			"number": "4194567890",
			"name": "Cleo",
			"system": "POS",
			"missedCalls": 2
		},
		{
			"number": "5677890123",
			"name": "Fidel",
			"system": "DVR",
			"missedCalls": 1
		},
		{
			"number": "4194558877",
			"name": "Benny",
			"system": "POS",
			"missedCalls": 5
		},
		{
			"number": "5676439489",
			"name": "Steve",
			"system": "DVR",
			"missedCalls": 4
		}
	]
};













