let buttonZero = document.getElementById('number-zero');
let buttonOne = document.getElementById('number-one');
let buttonTwo = document.getElementById('number-two');
let buttonThree = document.getElementById('number-three');
let buttonFour = document.getElementById('number-four');
let buttonFive = document.getElementById('number-five');
let buttonSix = document.getElementById('number-six');
let buttonSeven = document.getElementById('number-seven');
let buttonEigth = document.getElementById('number-eight');
let buttonNine = document.getElementById('number-nine');
let buttonComa = document.getElementById('coma');
let clearBtn = document.getElementById('operator-AC');
let backSpaceBtn = document.getElementById('operator-space');
let buttonPercent = document.getElementById('operator-percent');

let displayValElement = document.getElementById('calculation-display');

let calcNumBtns = document.getElementsByClassName('btn-number');
let calcOperatorBtns = document.getElementsByClassName('btn-operator-number');
let displayVal = '0';
let pendingVal;
let evalStringArray = [];

let updateDisplayVal = (clickObj) => {
  let btnText = clickObj.target.innerText;
  if (displayVal === '0') displayVal = '';

  displayVal += btnText;
  displayValElement.innerText = displayVal;
};

let performOperation = (clickObj) => {
  let operator = clickObj.target.innerText;

  switch (operator) {
    case 'plus':
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;

    case 'minus':
      pendingVal = displayVal;
      displayVal = 0;
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;

    case 'equal':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(' '));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;
    default:
      break;
  }
};

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
};
