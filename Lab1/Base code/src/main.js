var shader = null;
let shapeType = 'triangle';

function main() {
  // Retrieve the canvas from the HTML document
  canvas = document.getElementById("webgl");

  // Retrieve WebGL rendering context
  var gl = getWebGLContext(canvas);
  if (!gl) {
    console.log("Failed to get WebGL rendering context.");
    return;
  }

  // Initialize the scene
  var scene = new Scene();
  var inputHandler = new InputHandler(canvas, scene,shapeType);

  // Initialize shader
  shader = new Shader(gl, ASG1_VSHADER, ASG1_FSHADER);

  // Add attibutes
  shader.addAttribute("a_Position");
  shader.addAttribute("a_Color");

  // Initialize renderer with scene and camera
  renderer = new Renderer(gl, scene, null);
  renderer.start();

  //Check for the mouse click on those function buttons
  document.getElementById("clearButton").addEventListener("click",
    function myFunction() {
      clearCanvas(gl,scene);
    }
  );

  document.getElementById("squareButton").addEventListener("click",
    function myFunction() {
      shapeType = "square";
    }
  );

  document.getElementById("triangleButton").addEventListener("click",
    function myFunction() {
      shapeType = "triangle";
    }
  );

  document.getElementById("circleButton").addEventListener("click",
    function myFunction() {
      shapeType = "circles";
    }
  );
}

function clearCanvas(gl,scene){
  scene.clearGeometries();

}
