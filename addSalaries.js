let sum = 0;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

for (let key in salaries){
  sum += (+salaries[key]);
  };
 
const showSum = () => (alert(`The total salary is ${sum}.`));

let showSumSwitch = confirm('Would you like to see the total salary?');
showSumSwitch ? showSum() : false;
