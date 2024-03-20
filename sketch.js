let gui ;
let button1 ;
let button2 ;
let button3 ;
let slider ;
var song1 ; 

let currentPage = 1,
  numberOfPages = 2;



function setup(){
 // song1 = loadSound("whisper.mp3", loaded ); 
}

// function loaded(){
//   song.play();
// }



function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  button1 = createButton ("30 dB" , 150 , 150 , 95 , 75);
  button2 = createButton ("60 dB" , 150 , 250 , 95 , 75);
  button3 = createButton ("90 dB" , 150 , 350 , 95 , 75);
  button4 = createButton ("Continue" , 150 , 450 , 95 , 75);
  slider = createSlider("soud level" , 50 , 75 );
  
}


function draw() {
  background(300);
  drawGui();
  // drawPage();
  
  
  
   if(button1.isPressed){
    console.log("Button is pressed! ")
     fill(255,0,0);
      slider.val = 0.3;

  }
  
  if(button2.isPressed){
    console.log("Button is pressed! ")
    
    slider.val = 0.6;
    
  }
  
  if(button3.isPressed){
    console.log("Button is pressed! ")
     
    // slider(50, 75, 30, 75);
     slider.val = 0.9;
  }
  
    if(button4.isPressed){
    console.log("Button is pressed! ")
     
      
      
  }
  
  
 
  
} 
