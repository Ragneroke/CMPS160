/**
 * Specifies a Cube. A subclass of geometry.
 *
 * @author Guanchen Raymond   Liu
 * @this {Cube}
 **/
class Cube extends Geometry {
  /**
   * Constructor for Cube.
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

      this.vertices = this.generateCubeVertices(centerX, centerY, rColor, gColor, bColor, shapeSize);
      this.faces = {0: this.vertices};
      this.modelMatrix = new Matrix4();
      this.rotationMatrix = new Matrix4();
      this.rotationMatrix.setRotate(1,0,1,1);

      this.translationMatrix = new Matrix4();

      // CALL THIS AT THE END OF ANY SHAPE CONSTRUCTOR
      this.interleaveVertices();

  }

  generateCubeVertices(centerX, centerY, rColor, gColor, bColor,shapeSize) {
      var vertices = []

      var vertex1 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex2 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);
      var vertex3 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);

      var vertex4 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex5 = new Vertex(centerX+shapeSize, centerY-shapeSize, 0.0, rColor, gColor, bColor);
      var vertex6 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);

      var vertex7 = new Vertex(centerX-shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex8 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex9 = new Vertex(centerX-shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex10 = new Vertex(centerX-shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex11 = new Vertex(centerX+shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex12 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex13 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);
      var vertex14 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex15 = new Vertex(centerX-shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex16 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0.0, rColor, gColor, bColor);
      var vertex17 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex18 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0, rColor, gColor, bColor);

      var vertex19 = new Vertex(centerX-shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex20 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0, rColor, gColor, bColor);
      var vertex21 = new Vertex(centerX-shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex22 = new Vertex(centerX-shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex23 = new Vertex(centerX-shapeSize, centerY+shapeSize, 0, rColor, gColor, bColor);
      var vertex24 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);

      var vertex25 = new Vertex(centerX+shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);
      var vertex26 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor,bColor);
      var vertex27 = new Vertex(centerX+shapeSize, centerY+shapeSize, 0, rColor, gColor, bColor);

      var vertex28 = new Vertex(centerX+shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);
      var vertex29 = new Vertex(centerX+shapeSize, centerY+shapeSize, -2 * shapeSize, rColor, gColor,bColor);
      var vertex30 = new Vertex(centerX+shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex31 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);
      var vertex32 = new Vertex(centerX+shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex33 = new Vertex(centerX-shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);

      var vertex34 = new Vertex(centerX-shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);
      var vertex35 = new Vertex(centerX+shapeSize, centerY-shapeSize, -2 * shapeSize, rColor, gColor, bColor);
      var vertex36 = new Vertex(centerX+shapeSize, centerY-shapeSize, 0, rColor, gColor, bColor);










      vertices.push(vertex1);
      vertices.push(vertex2);
      vertices.push(vertex3);
      vertices.push(vertex4);
      vertices.push(vertex5);
      vertices.push(vertex6);
      vertices.push(vertex7);
      vertices.push(vertex8);
      vertices.push(vertex9);
      vertices.push(vertex10);
      vertices.push(vertex11);
      vertices.push(vertex12);
      vertices.push(vertex13);
      vertices.push(vertex14);
      vertices.push(vertex15);
      vertices.push(vertex16);
      vertices.push(vertex17);
      vertices.push(vertex18);
      vertices.push(vertex19);
      vertices.push(vertex20);
      vertices.push(vertex21);
      vertices.push(vertex22);
      vertices.push(vertex23);
      vertices.push(vertex24);
      vertices.push(vertex25);
      vertices.push(vertex26);
      vertices.push(vertex27);
      vertices.push(vertex28);
      vertices.push(vertex29);
      vertices.push(vertex30);
      vertices.push(vertex31);
      vertices.push(vertex32);
      vertices.push(vertex33);
      vertices.push(vertex34);
      vertices.push(vertex35);
      vertices.push(vertex36);



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
