// VARIABLES
var myData;
var bg;
var img;
var astronauts = [];
var usa;
var russia;
var italy;
var a = true;


// PRELOAD
function preload() {
	myData = loadJSON('assets/peopleinspace.json');
	bg = loadImage("assets/background.png");
	img = loadImage("assets/astronaut3.png");
	usa = loadImage("assets/usa.png");
	russia = loadImage("assets/russia.png");
	italy = loadImage("assets/italy.png");

}


// SETUP
function setup() {
   createCanvas(500,500);

  	for (var i = 0; i < myData.people.length; i++) {
	   var astroData = myData.people[i];
		var newAstronaut = new Astronaut(astroData.name, astroData.launchdate, astroData.country);
		astronauts.push(newAstronaut);
	}

}


// DRAW
function draw() {
   
   background(bg);
   
  	for (var i = 0; i < astronauts.length; i++) {
	
		var astronaut = astronauts[i];
		astronaut.move();
		astronaut.display();
		
		
	
  	}
  	
  	textSize(20);
  text("Keep any key pressed to get info.", 250, 470);
  	
  	

	
	}
	
	
	
// MOUSECLICKED

function mousePressed() {
   
   
        }

// ASTRONAUTI
function Astronaut(name, date, country) {
   
	this.name = name;
	this.launchdate = date;
	this.country = country;


	
	// Parse si usa per trasformare in millisecondi
	var daysInSpace = (Date.now() - Date.parse(this.launchdate)) / (1000 * 60 * 60 * 24)/2;

   this.radius = daysInSpace;
   
	this.x = random(this.radius+1, width+1 - this.radius);
	this.y = random(this.radius+1, height+1 - this.radius);

	this.incrementX = 1;
	this.incrementY = 1;
	
	
	this.display = function() {
	   

	  
		image(img, this.x-50, this.y-50);
	
		textAlign(CENTER);
		fill('white');
		
      
     if(keyIsPressed) {
         fill('white');
         textSize(10);
         text(this.name, this.x-20, this.y+45);
         fill('lightgrey');
         text(parseInt(this.radius)+" days in space", this.x-20, this.y+56);
         fill(200,200,200);
         if(this.country == "usa") {
         image(usa, this.x-9, this.y-50);
          }
          
          else if(this.country =="russia") {
            image(russia, this.x-9, this.y-50);
         
          }
          
          else if(this.country == "italy") {
          image(italy, this.x-9, this.y-50);
          }
		   
		   
		}
		
		
	}

	this.move = function() {
	   
      
		this.x += this.incrementX;
		this.y += this.incrementY;

		if (this.x > width - this.radius || this.x < this.radius) {
			this.incrementX *= -1;
		}

		if (this.y > height - this.radius || this.y < this.radius) {
			this.incrementY *= -1;
		}
		
		
	}}
	
	


