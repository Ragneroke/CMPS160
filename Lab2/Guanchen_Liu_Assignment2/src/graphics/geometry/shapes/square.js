/**
 * Specifies a Square. A subclass of geometry.
 *
 * @author Guanchen Raymond   Liu
 * @this {Square}
 */
class Square extends Geometry {
  /**
   * Constructor for Square.
   *
   * @constructor
   * @param {Shader} shader Shading object used to shade geometry
   * @returns {Square} Square created
   */
  constructor(shader, centerX, centerY, rColor, gColor, bColor, shapeSize) {
      super(shader);
      this.centerX = centerX;
      this.centerY = centerY;
      this.rColor = rColor;
      this.gColor = gColor;
      this.bColor = bColor;
      this.shapeSize= shapeSize;

      this.vertices = this.generateSquareVertices(centerX, centerY, rColor, gColor, bColor, shapeSize);
      this.faces = {0: this.vertices};
      this.modelMatrix = new Matrix4();
      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(3,0,0,1);

      this.translationMatrix = new Matrix4();

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();

  }

  generateSquareVertices(centerX, centerY, rColor, gColor, bColor,shapeSize) {
      var vertices = []

      var vertex1 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex2 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);
      var vertex3 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);

      var vertex4 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex5 = new Vertex(centerX+shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex6 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);



      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);


      return vertices;
  }
  render(){
      this.translationMatrix.setTranslate(this.centerX,this.centerY,0);
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
      this.modelMatrix = this.modelMatrix.multiply(this.rotationMatrix);
      this.translationMatrix.setTranslate(-this.centerX, -this.centerY, 0);
      this.modelMatrix = this.modelMatrix.multiply(this.translationMatrix);
      this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);
  }
}

