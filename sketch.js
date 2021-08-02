//there are 2 data structures 1)variables and 2)arrays
//there are 5 data types 1)number, 2)strings, 3)boolean, 4)undefined and 5)null
//arrays are special kind of variables that can hold more than one data
//indexing in an array starts from 0
//length of the array is number of elements inside the array
// var a = 5;
// console.log(a);
// // Number - 5;

// var b = "tiger";
// console.log(b);
// // Strings - tiger

// var c = true;
// console.log(c);
// //Boolean - true

// var d;
// console.log(d)
// //undefined - undefined

// var e = (null);
// console.log(e);
// //null-null

// var g = [2,"om",true,"coding",null];
// console.log(g); //[2,"om",true,"coding",null];
// console.log(g.length); // 5
// console.log(g[0]); //2
// console.log(g[3]); //coding


// var h = [ [2,"om"],  [true,"coding",null], ["mango","yellow"] ];
// console.log(h); // [ [2,"om"],  [true,"coding",null], ["mango","yellow"] ]; //[(2), (3),(2)]
// console.log(h.length); // 3
// console.log(h[0]); //[2,"om"]
// console.log(h[1][1]); coding

// var p =[x,y]
// var t = [p1, p2, p3, p4]

// var g = [2,"om",true,"coding",null];
// console.log(g); //[2,"om",true,"coding",null];
// g.push("om")
// console.log(g); //[2,"om",true,"coding",null, "om"];
// g.push("om")
// console.log(g); //[2,"om",true,"coding",null, "om", "om"];
// g.pop();
// console.log(g); //[2,"om",true,"coding",null, "om"];
// g.pop();
// console.log(g); //[2,"om",true,"coding",null];



const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}