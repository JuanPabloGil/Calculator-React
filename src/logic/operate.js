const Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);

  if (operation === '+') {
    return num1.plus(num2).toString();
  }
  if (operation === '-') {
    return num1.minus(num2).toString();
  }
  if (operation === 'X') {
    return num1.times(num2).toString();
  }
  if (operation === '÷') {
    if (num2 === '0') {
      return 'Infinity';
    }
    return num1.div(num2).toString();
  }

  return null;
};

export default operate;
