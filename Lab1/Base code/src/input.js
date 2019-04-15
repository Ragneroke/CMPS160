var _inputHandler = null;

/**
 * Specifies a Input Handler. Used to parse input events from a HTML page.
 *
 * @author Lucas N. Ferreira
 * @this {Scene}
 */
class InputHandler {
    /**
     * Initializes the event handeling functions within the program.
     */
    constructor(canvas, scene, shapeType) {
      this.canvas = canvas;
      this.scene = scene;
      this.shapeType = shapeType;

      _inputHandler = this;

      // Mouse Events
      this.canvas.onmousedown = function(ev) { _inputHandler.click(ev) };
    }

    /**
     * Function called upon mouse click.
     */
    click(ev) {
        // Save x,y coordinates.
        var centerX = ev.clientX;
        var centerY = ev.clientY;
        var rect = ev.target.getBoundingClientRect();

        //Adjust the x,y coordinates for drawing
        centerX = ((centerX - rect.left) - canvas.height/2) / (canvas.height/2);
        centerY = (canvas.width/2 - (centerY - rect.top)) / (canvas.width/2);

        //Show the current position of click on html
        document.getElementById("clickedPointsText").innerHTML = "x: " + centerX + " y: " + centerY;

        //Get color from the color slide bar
        var rColor = document.getElementById("redSlider").value/255;
        var gColor = document.getElementById("greenSlider").value/255;
        var bColor = document.getElementById("blueSlider").value/255;
        console.log(rColor,gColor,bColor);

        var shapeSize = document.getElementById("sizeSlider").value/100;

        //Get segments count from the segment slider
        var segment = document.getElementById("segSlider").value;

        console.log(shapeType);
        switch(shapeType){
          case "square":
            var time0 = performance.now();
            var shape = new Square(shader, centerX, centerY, rColor, gColor, bColor, shapeSize);
            this.scene.addGeometry(shape);
            break;

          case "triangle":
            var time0 = performance.now();
            var shape = new Triangle(shader, centerX, centerY, rColor, gColor, bColor, shapeSize);
            this.scene.addGeometry(shape);
            break;

          case "circles":
            var time0 = performance.now();
            var shape = new Circle(shader, centerX, centerY, rColor, gColor, bColor, shapeSize, segment);
            this.scene.addGeometry(shape);
            break;
        }
        var time1 = performance.now();
        document.getElementById("shapeDrawTime").innerHTML = "Shapes drawn in " + (time1 - time0) + " milliseconds";
    }
}
