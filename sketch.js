//<script src="path/to/p5.sound.js"></script>

let mic, fft;

let canvas_width = 700
let canvas_height = 700

let min_point = 10
let max_point = 150

function setup() {
  
  //displayWidth takes device size
  createCanvas(displayWidth, displayHeight);
  frameRate(10);
  
  // setting up the audio;
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  print(windowWidth)
  print(windowHeight)
}

function draw() {
  background(10, 50);
  spectrum = fft.analyze()
  

  bass = map(fft.getEnergy(16, 200), 0, 255, 
             min_point, max_point)
  lowMid = map(fft.getEnergy(201, 400), 0, 255, 
             min_point, max_point)
  mid = map(fft.getEnergy(400, 500), 0, 255, 
             min_point, max_point)
  highMid = map(fft.getEnergy(500, 700), 0, 255, 
             min_point, max_point)
  treble = map(fft.getEnergy(700, 20000), 0, 255, 
             min_point, max_point)
  
  fuzz_draw(bass, bass, '#4B0082', 200)
  fuzz_draw(lowMid, lowMid, '#0000FF', 200)
  fuzz_draw(mid, mid, '#00FF00', )
  fuzz_draw(highMid, highMid, '#FFFF00')
  fuzz_draw(treble, treble, '#FF0000')
  
}

function line_draw(x, y, col, size = 300, step = 1){
  
  circle_x = random(canvas_height) 
  circle_y = random(canvas_width)
  
  x = x * size
  y = y * size
  
  jiggle_x = random(-step, step)
  jiggle_y = random(-step, step)
  
  for(jiggle = 0.25; jiggle < 25; jiggle += .25){
    
    fill(color(col))
    noStroke()
    
    ellipse(circle_x, circle_y, x, y)
    
    circle_x += jiggle_x
    circle_y += jiggle_y
  }
}

function fuzz_draw(x, y, col, step = 1){
  
  circle_x = random(canvas_height) 
  circle_y = random(canvas_width)
  
  //x = x * size
  //y = y * size
    
  for(jiggle = 0.25; jiggle < 100; jiggle += .25){
    
    fill(color(col))
    noStroke()
    
    ellipse(circle_x, circle_y, x, y)
    
    jiggle_x = random(-step, step)
    jiggle_y = random(-step, step)
    
    circle_x += jiggle_x
    circle_y += jiggle_y
  }
}

function dumb(){
  //bass = spectrum.getEnergy("bass")
  //lowMid = spectrum.getEnergy("lowMid")
  //mid = spectrum.getEnergy("mid")
  //highMid = spectrum.getEnergy("highMid")
  //treble = spectrum.getEnergy("treble")
  
  testing(freq_1, freq_1, '#9400D3')
  testing(freq_1, freq_1, '#4B0082')
  testing(freq_1, freq_1, '#0000FF')
  testing(freq_1, freq_1, '#00FF00')
  testing(freq_1, freq_1, '#FFFF00')
  testing(freq_1, freq_1, '#FF7F00')
  testing(freq_1, freq_1, '#FF0000')
}