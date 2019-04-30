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
      this.xSpeed = ((-Math.random() * 2) + 1)/100;
      this.ySpeed = ((-Math.random() * 2) + 1)/100;
      this.x = centerX;
      this.y = centerY;
      this.timer = 0;

      this.vertices = this.generateCircleVertices(centerX, centerY, rColor, gColor, bColor, shapeSize, segment);
      this.modelMatrix = new Matrix4();
      this.translationMatrix = new Matrix4();
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
  render(){
    this.translationMatrix.setTranslate(this.xSpeed,this.ySpeed,0);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.timer >= 60){
      this.timer = 0;
      this.xSpeed = ((-Math.random() * 2) + 1)/100;
      this.ySpeed = ((-Math.random() * 2) + 1)/100;

    }
    if(this.x >= 1 && this.xSpeed > 0){
      this.xSpeed = -this.xSpeed;
    }else if (this.x <= -1 && this.xSpeed < 0){
      this.xSpeed = -this.xSpeed;
    }
    if (this.y <= -1 && this.ySpeed < 0){
      this.ySpeed = -this.ySpeed;
    }else if (this.y >= 1 && this.ySpeed > 0){
      this.ySpeed = -this.ySpeed;
    }
    this.timer++;
    this.modelMatrix.multiply(this.translationMatrix);
    this.shader.setUniform("u_ModelMatrix", this.modelMatrix.elements);

  }
}

