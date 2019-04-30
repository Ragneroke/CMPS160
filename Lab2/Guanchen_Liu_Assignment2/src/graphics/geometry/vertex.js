/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Guanchen Raymond Liu
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, r, g, b) {
  	  var rColor = document.getElementById("redSlider").value/255;
      var gColor = document.getElementById("greenSlider").value/255;
      var bColor = document.getElementById("blueSlider").value/255;
      this.point  = new Vector3([x, y, z]);
      this.color  = [rColor, gColor, bColor, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
