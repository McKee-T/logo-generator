import { Circle, Triangle, Square } from './shapes.js';

describe('Shape classes', () => {
  test('Circle render method', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Triangle render method', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toBe('<polygon points="150,20 230,180 70,180" fill="blue" />');
  });

  test('Square render method', () => {
    const square = new Square('green');
    expect(square.render()).toBe('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
