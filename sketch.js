var name; 
var whatsapp;
var state;

function setup() {
	createCanvas(800, 700); 

	name = "Coding is cool!"
	
	console.log(name.length);
	console.log(name.toUpperCase());
	console.log(name.toLowerCase());
	console.log(name.replace("Coding","Reading"));

	console.log(name+"lalala");
	console.log(name/"name1");

	answer = area(20,30);
	console.log(answer);

	state = [
		{
			name: "Shilpa",
			age: 18
		},
		{
			name: "Maya",
			age: 15
		},
		{
			name: "George",
			age: 12
		}
	]

	console.log(state[1].name);
	console.log(state[1].age);
	for(var plr in state){
		console.log(state[plr].name+state[plr].age)
	}

	whatsapp = ["la","bla","da","gah","sa","ha"];
	whatsapp.push("lol");
	
	for(var i=0;i<whatsapp.length;i++){
		console.log(whatsapp[i]);
	}

	whatsapp.pop();

	console.log(whatsapp);

	var day = Math.round(random(1,7));
	var dayName;
	switch(day){
		case 1: dayName = "Monday";
		break;
		case 2: dayName = "Tuesday";
		break;
		case 3: dayName = "Wednesday";
		break;
		case 4: dayName = "Thursday";
		break;
		case 5: dayName = "Friday";
		break;
		case 6: dayName = "Saturday";
		break;
		case 7: dayName = "Sunday";
		break;
	}

	console.log(dayName);

	weather();
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function area(length,width){
	var area = length*width
	return area
}

async function weather(){
	var response = await fetch ("https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139");
	var responseJson = await response.json();
	console.log(responseJson.main.temp);
}