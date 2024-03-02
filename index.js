import inquirer from 'inquirer';
import fs from 'fs';
import { Circle, Triangle, Square } from './lib/shapes.js'; // Adjust the path as necessary

// Prompting the user for input
inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo text:',
    validate: input => input.length <= 3 ? true : 'Text must be up to 3 characters.'
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape color:',
  }
]).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  let shapeObj;

  switch (shape) {
    case 'circle':
      shapeObj = new Circle(shapeColor);
      break;
    case 'triangle':
      shapeObj = new Triangle(shapeColor);
      break;
    case 'square':
      shapeObj = new Square(shapeColor);
      break;
  }

  const shapeSVG = shapeObj.render();

  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
    </svg>
  `;

  // Saving the SVG to a file in the examples/ directory
  fs.writeFile('./examples/logo.svg', svgContent, err => {
    if (err) throw err;
    console.log('Generated examples/logo.svg');
  });
});
