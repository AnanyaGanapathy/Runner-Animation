var runner;
var path;
var invisible_wall_1;
var invisible_wall_2;

function preload(){

  //pre-load images
  path_image = loadImage("path.png")
  runner_animation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){

  createCanvas(400,400);

  //create sprites here
    
  path = createSprite(200, 200)
  path.addImage("path", path_image)
  path.velocityY = 4
  path.scale = 1.2
  path.y = path.width/10

  runner = createSprite(200, 300, 2, 1)
  runner.scale = 0.05
  runner.addAnimation("runner", runner_animation)
    
  invisible_wall_1 = createSprite(300, 100, 10, 600)
  invisible_wall_1.visible = false
  invisible_wall_2 = createSprite(100, 100, 10, 600)
  invisible_wall_2.visible = false
}

function draw() {

  background(0);

    if (path.y > 400) {
      path.y = height/10
    }

  runner.x = World.mouseX
  runner.collide(invisible_wall_1)
  runner.collide(invisible_wall_2)

  drawSprites()

}
