//Coding example
//by Shi Ding
//Title: Worldscape Adventurer
//This coding project is based on what I learned from coding art summer camp
//Interaction 1: You can play with the snow using mouse control. Explore heavy snow, light snow, and fading snow and texts.  Additionally, you can see the moon color changes as it moves across the sky. 
//Interaction 2: You can play with the moon using mouse control. Explore the background color changes as the moon falls down from dark sky to sunny day


let pointx = 10;
let pointy = 20;
var color1 =0;
var color2 =0;
var color3 =255;
var words = ["Winter冬天dōng tiān","Snow下雪xià xuě","Moon月亮yuè liàng"];
var index= 0;

 

function setup() {
  createCanvas(700, 400);
  //background(77,166,255);

}

function mousePressed() {
//Pressed the mouse to changes the background 
  //background(mouseY, mouseX, 150) 
  background(0);
  index=index+1;
  
  if (index == 3)
   index = 0
}

function draw() {
  fill(255,255,186);
  background(color1, color2, color3)
color1 = map(mouseY, 0, 400, 0, 100);
color2 = map(mouseY, 0, 400, 0, 300)
color3 = map(mouseY, 0, 400, 0, 300);

  
  //The moon:The moon's color changes as it moves across the sky. 
  //fill(255,255,77);
  //fill(255,mouseY,77);
  fill(255,random(200,255),77);
  
  //Tried the text on the top, its fun! 
  fill(255);
  textSize(32);
  textStyle(BOLD)
  text(words[index], 12, 50);
  
  
  //ellipse(556, 46, 55, 55)
  ellipse(556, mouseY, 55, 55);
  
  //snow flakes
stroke('white');
strokeWeight(10);
point(pointx+random(700), random(400));
point(random(400), pointy+random(400));
  pointx ++; 
  pointy ++;
  
  //ellipse(20, 250 , num, num)
  //ellipse( 300, 350, nums[2],nums[2]); 
  
  
  //Main character's shirt; shirts changes as the weather changes
  noStroke()
  fill(255,204,238);
  //fill(random(200, 255), random(150, 204), random(200, 238));
  rect(99,240,190,240,40);
  
  //left hand
  stroke(100);
  strokeWeight(2);
  line(140,400,140,290);
  //right hand
  line(250,400,250,290);
  //hair 
  noStroke();
  fill(128,64,0);
  rect(100, 60, 175, 250, 80);
  
}