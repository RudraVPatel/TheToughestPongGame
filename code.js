var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["81a4f500-ad11-4009-8f0e-175b165af74b","11d5d9f0-6932-45de-ba25-6f4ac37fe9a9","7d58941f-a7d8-42da-85c6-3efa6131461a","42b7aa29-c5f8-44fe-9d49-8540deca9c13","e92d7a76-cb9d-426f-90f2-1f5356f539aa","efd3d37e-602d-4ef6-a92f-44fec91fa462","0ad793ce-16c4-4650-bcc4-2ceb86fce097","5096dd82-6a97-4c85-a67a-cb666ce1ea24"],"propsByKey":{"81a4f500-ad11-4009-8f0e-175b165af74b":{"name":"ball","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png","frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":4,"version":"PWcH02.GFTF6QSmGD3Kt9H237NfFP0K_","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/81a4f500-ad11-4009-8f0e-175b165af74b.png"},"11d5d9f0-6932-45de-ba25-6f4ac37fe9a9":{"name":"robot","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png","frameSize":{"x":77,"y":69},"frameCount":1,"looping":true,"frameDelay":4,"version":"YXRf28RzW7Os4PqBTPBCm3457IVqZ5rY","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":69},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/11d5d9f0-6932-45de-ba25-6f4ac37fe9a9.png"},"7d58941f-a7d8-42da-85c6-3efa6131461a":{"name":"player","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png","frameSize":{"x":60,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"pP86elEJMDSaBpOH2YVuTm_QG_lfXJUB","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":91},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/7d58941f-a7d8-42da-85c6-3efa6131461a.png"},"42b7aa29-c5f8-44fe-9d49-8540deca9c13":{"name":"player_kick","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png","frameSize":{"x":77,"y":77},"frameCount":1,"looping":true,"frameDelay":4,"version":"VIWw8L8G.YDRsMgg45Z47VAcFw.FGeh5","loadedFromSource":true,"saved":true,"sourceSize":{"x":77,"y":77},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/42b7aa29-c5f8-44fe-9d49-8540deca9c13.png"},"e92d7a76-cb9d-426f-90f2-1f5356f539aa":{"name":"player_fall","sourceUrl":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png","frameSize":{"x":92,"y":51},"frameCount":1,"looping":true,"frameDelay":4,"version":"G4rGQn1X3mkiLfQT.nznBcLKZYP_weGo","loadedFromSource":true,"saved":true,"sourceSize":{"x":92,"y":51},"rootRelativePath":"assets/v3/animations/-avJdgAUNRjyTsnOFCs8c0UqlTsKHiEVHv4fvZZZiKA/e92d7a76-cb9d-426f-90f2-1f5356f539aa.png"},"efd3d37e-602d-4ef6-a92f-44fec91fa462":{"name":"girlPlayer.png_1","sourceUrl":null,"frameSize":{"x":50,"y":85},"frameCount":1,"looping":true,"frameDelay":12,"version":"vqc95E1j5tu00BVTl_n6im.WNEUY6.Uv","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":85},"rootRelativePath":"assets/efd3d37e-602d-4ef6-a92f-44fec91fa462.png"},"0ad793ce-16c4-4650-bcc4-2ceb86fce097":{"name":"girlPlayer_kick.png_1","sourceUrl":null,"frameSize":{"x":50,"y":76},"frameCount":1,"looping":true,"frameDelay":12,"version":"uCWqlphaHswAWIRVe5CgelzKF8UWBLjw","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":76},"rootRelativePath":"assets/0ad793ce-16c4-4650-bcc4-2ceb86fce097.png"},"5096dd82-6a97-4c85-a67a-cb666ce1ea24":{"name":"city_1","sourceUrl":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/37D0bGsit4sN8LdqaxZTXUMXrbix3Fgw/category_backgrounds/city.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//create the ball, playerPaddle and computerPaddle as sprite objects
var ball = createSprite(200,200,10,10);
ball.setAnimation("ball");

var playerPaddle = createSprite(380,200,10,70);
playerPaddle.setAnimation("player");
var computerPaddle = createSprite(10,200,10,70);
computerPaddle.setAnimation("robot");

//variable to store different state of game
var gameState = "serve";

//variables to keep the score
var compScore = 0;
var playerScore = 0;

function draw() {
  //clear the screen
  background("lightgreen");
  
// add sounds when paddles hit the ball
  if(ball.isTouching(computerPaddle) || ball.isTouching(playerPaddle)) {
   playSound("assets/hit.mp3");
  }
  
  
  
  //place info text in the center
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
   
  //display scores
  text(compScore, 170,20);
  text(playerScore, 230,20);
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(200,i,200,i+10);
  }
  
  
  // to make the player kick the paddle and go back
  if(keyWentDown("K")){
    playerPaddle.setAnimation("player_kick");
  }
  if(keyWentUp("K")) {
    playerPaddle.setAnimation("player");
  }
  
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom edges
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
 
  
  //serve the ball when space is pressed
  if (keyDown("space") &&  gameState === "serve") {
    serve();
    gameState = "play";
    // player animation back to normal
    playerPaddle.setAnimation("player");
  }
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    
    if(ball.x > 400) {
      compScore = compScore + 1;
    playSound("assets/category_explosion/melodic_loss_1.mp3", false);
    // indicating player has lost the point
    playerPaddle.setAnimation("player_fall");
    
    }
    
    if(ball.x < 0) {
      playerScore = playerScore + 1;
      // indicating computer has lost one point
      playSound("assets/category_explosion/melodic_loss_1.mp3")
    }
    
    reset();
    gameState = "serve";
  }
  
  if (playerScore === 5 || compScore === 5){
    gameState = "over";
    text("Game Over!",170,160);
    text("Press 'R' to Restart",150,180);
  }
  
  if (keyDown("r") && gameState === "over") {
    gameState = "serve";
    compScore = 0;
    playerScore = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
