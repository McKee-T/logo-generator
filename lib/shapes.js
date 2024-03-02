class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius = 80) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="150,20 230,180 70,180" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color, size = 200) {
      super(color);
      this.size = size;
    }
  
    render() {
      return `<rect x="50" y="50" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }
  
  export { Circle, Triangle, Square };
  