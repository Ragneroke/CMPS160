/**
 * Specifies a triangle. A subclass of geometry.
 *
 * @author Lucas N. Ferreira
 * @this {Triangle}
 */
class Triangle extends Geometry {
  /**
   * Constructor for Triangle.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Triangle} Triangle created
   */
  constructor(shader, centerX, centerY, rColor, gColor, bColor, shapeSize) {
      super(shader);

      this.centerX = centerX;
      this.centerY = centerY;
      this.rColor = rColor;
      this.gColor = gColor;
      this.bColor = bColor;
      this.shapeSize = shapeSize;
      this.vertices = this.generateTriangleVertices(centerX,centerY, rColor, gColor, bColor, shapeSize);
      this.faces = {0: this.vertices};


      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();
  }

  generateTriangleVertices(centerX, centerY, rColor, gColor, bColor, shapeSize) {
      var vertices = []

      var vertex1 = new Vertex(centerX - shapeSize, centerY-shapeSize, 0.0,rColor, gColor, bColor);
      var vertex2 = new Vertex(centerX + shapeSize, centerY-shapeSize, 0.0,rColor, gColor, bColor);
      var vertex3 = new Vertex(centerX,  centerY+shapeSize, 0.0,rColor, gColor, bColor);

      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);

      return vertices;
  }
}
