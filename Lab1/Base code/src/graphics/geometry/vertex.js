/**
 * Specifies a vertex. Currently only contains the vertex's position.
 *
 * @author Guanchen Raymond Liu
 * @this {Vertex}
 */
class Vertex {
  constructor(x, y, z, r, g, b) {
      this.point  = new Vector3([x, y, z]);
      this.color  = [r, g, b, 1.0];

      // This class can be extended to support other attributes such as
      // normals and UV coordinates.
  }
}
