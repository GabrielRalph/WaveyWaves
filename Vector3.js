import {Vector} from "https://www.svg.plus/3.5.js"

class Vector3{
  constructor(x, y, z){
    this.x = x;
    this.y = y;
    this.z = z;
  }

  rotateZ(theta) {
    let x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
    let y = this.x * Math.sin(theta) + this.y * Math.cos(theta);
    return new Vector3(x, y, this.z);
  }
  rotateY(theta) {
    let x = this.x * Math.cos(theta) + this.z * Math.sin(theta);
    let z = -this.x * Math.sin(theta) + this.z * Math.cos(theta);
    return new Vector3(x, this.y, z);
  }
  rotateX(theta) {
    let y = this.y * Math.cos(theta) - this.z * Math.sin(theta);
    let z = -this.y * Math.sin(theta) + this.z * Math.cos(theta);
    return new Vector3(this.x, y, z);
  }

  rotate(vec) {
    if (vec instanceof Vector3) {
      return this.rotateX(vec.x).rotateY(vec.y).rotateZ(vec.z);
    }
    return null;
  }

  add(b) {
    return new Vector3(this.x + b.x, this.y + b.y, this.z + b.y);
  }
  sub(b) {
    return new Vector3(this.x - b.x, this.y - b.y, this.z - b.y);
  }
  mul(b) {
    return new Vector3(this.x * b.x, this.y * b.y, this.z * b.y);
  }
  div(b) {
    return new Vector3(this.x / b.x, this.y / b.y, this.z / b.y);
  }

  toVector(){
    return new Vector(this.x, this.y);
  }
}

export {Vector3}
