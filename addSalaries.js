let numberOfCases = 0;
let sum = 0;
let salaries = {};

caseCounter:
for (let key in salaries) {
  ++numberOfCases;
  sum += (+salaries[key]);
  continue caseCounter;
}

function addSalary() {
  if(numberOfCases){
    alert(`The salary is ${sum}.`)
  }
  else{
    alert('The salary is zero.')
    }
}


let addSalarySwitch = confirm('Would you like to add the salaries?');

addSalarySwitch ? addSalary() : false;
