$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid(); 


    // TODO 2 - Create Platforms
createPlatform(100, 600, 200, 20, "grey");      // Ground platform
createPlatform(350, 500, 150, 20, "green");     // Mid-height
createPlatform(600, 400, 100, 20, "orange");    // Higher up
createPlatform(800, 300, 150, 20, "blue");      // Near top
createPlatform(1050, 400, 100, 20, "red");      // Challenge jump


    // TODO 3 - Create Collectables
createCollectable("diamond", 370, 420);              // on green platform
createCollectable("grace", 810, 220, 0, 0.5);         // on blue platform
createCollectable("kennedi", 1100, 370, 0, 1);        // bouncing

    
    // TODO 4 - Create Cannons
createCannon("left", 300, 1500);    // fires every 1.5s
createCannon("top", 600, 2000);     // fires from above
createCannon("right", 450, 1200);   // fast cannon
createCollectable("gem", 200, 100, 0, 1, 100, 300, 2)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
