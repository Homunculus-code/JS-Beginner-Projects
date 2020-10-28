let codes = {};

let numberOfCases = 0;

for (let code in codes) {
  ++numberOfCases;
}

const isEmpty = () => {
  numberOfCases ? alert('The schedule is not empty.'): alert('The schedule is empty.')
};

let isEmptySwitch = confirm('Would you like to check whether your schedule is free?');
isEmptySwitch ? isEmpty() : false;