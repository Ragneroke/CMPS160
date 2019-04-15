/**
 * Specifies a circle. A subclass of geometry.
 *
 * @author Guanchen Raymond   Liu
 * @this {Circle}
 */
class Circle extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Circle} shader Shading object used to shade geometry
   * @returns {Circle} Square created
   */
  constructor(shader, centerX, centerY, rColor, gColor, bColor, shapeSize, segment) {
      super(shader);
      this.centerX = centerX;
      this.centerY = centerY;
      this.rColor = rColor;
      this.gColor = gColor;
      this.bColor = bColor;
      this.shapeSize= shapeSize;
      this.segment = segment

      this.vertices = this.generateCircleVertices(centerX, centerY, rColor, gColor, bColor, shapeSize, segment);
      this.faces = {0: this.vertices};

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateCircleVertices(centerX, centerY, rColor, gColor, bColor,shapeSize, segment) {
      var vertices = [];

      var sL = Math.tan((180 / segment) * (Math.PI / 180)) * shapeSize;
      //console.log(sL);
      var angle = 0;
      var radius = shapeSize / Math.cos((180 / segment) * (Math.PI / 180));
      console.log(radius);
      var vertexPrev = new Vertex(centerX - Math.sin(((180 / segment)) * (Math.PI / 180)) * radius, centerY + Math.cos(( (180 / segment)) * (Math.PI / 180)) * radius, 0.0, rColor, gColor, bColor);

      for(var i = 0; i < segment; ++i){
        var vertex1 = new Vertex(centerX, centerY, 0.0, rColor, gColor, bColor);
        var vertex2 = vertexPrev;
        var vertex3 = new Vertex(centerX + Math.sin((angle + (180 / segment)) * (Math.PI / 180)) * radius, centerY + Math.cos((angle + (180 / segment)) * (Math.PI / 180)) * radius, 0.0, rColor, gColor, bColor);
        vertexPrev = vertex3;
        vertices.push(vertex1);
        vertices.push(vertex2);
        vertices.push(vertex3);
        angle += 360/segment;
      }

      return vertices;
  }
}

