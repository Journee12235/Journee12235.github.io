var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#ff92dcff');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;
        var circles = [];

        // TODO 2 : Create a function that draws a circle 
        function drawCircle() {
            circle = draw.randomCircleInArea(canvas, true, true, "#e2a3ffff", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);
            circles.push(circle);
        }

        // TODO 3 & TODO 7: Use a loop to create multiple circles (Using 100 for final result)
        // (Replaces the repetitive calls from the original TODO 3 and the loop with 25)
        for (var i = 0; i < 100; i++) {
              drawCircle();
        }

        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 & TODO 5: (Repetitive calls deleted/replaced by the loop below)
            
            // TODO 8 / TODO 9 : Iterate over the array
           for (var i = 0; i < circles.length; i++) {
                var currentCircle = circles[i];
                // Update the position of the current circle
                physikz.updatePosition(currentCircle);
                // Check and correct the current circle's position (Circularity)
                game.checkCirclePosition(currentCircle);
            }
            
        }
    
        /* This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            // Left Boundary: Move circle off the left edge to the right edge
            if (circle.x < 0) {
                circle.x = canvas.width;
            }
            
            // Top Boundary: Move circle off the top edge to the bottom edge
            if (circle.y < 0) {
                circle.y = canvas.height;
            }
            
            // Bottom Boundary: Move circle off the bottom edge to the top edge
            if (circle.y > canvas.height) {
                circle.y = 0;
            }
            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}