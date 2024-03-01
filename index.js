import inquirer from 'inquirer';
import fs from 'fs';

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
  // Generating the SVG content based on the user's input
  const svgContent = generateSVG(answers);

  // Saving the SVG to a file
  fs.writeFile('logo.svg', svgContent, err => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
});

// Function to generate the SVG content
function generateSVG({ text, textColor, shape, shapeColor }) {
  const shapeSVG = {
    'circle': `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`,
    'triangle': `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`,
    'square': `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`
  }[shape];

  return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="40">${text}</text>
    </svg>
  `;
}
