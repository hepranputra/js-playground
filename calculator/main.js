//
console.log("Modified because of exercise 7g.");
//

let calculation = '';

// Here the element means any number or mathematical
// operator and also the equal sign.
function updateCalculation(element) {
  if (element === '=') {
      calculation = eval(calculation);
  } else if (element === 'clear') {
      calculation = '';
      console.log('cleared.');
      return;
  } else if (element === '+' || element === '-' || 
             element === '*' || element === '/') {
      calculation += ` ${element} `;
  } else {
      calculation += `${element}`;
  }

  console.log(calculation);
}
