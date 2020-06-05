import operate from './operate';
import isNumber from './isNumber';

const calculate = (dataObject, buttonName) => {
  let {
    total, next, operation,
  } = dataObject;

  if (buttonName === '0') {
    if (total) {
      total += '0';
    }
  }

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (isNumber(buttonName)) {
    if (total) {
      (total += buttonName);
    } else {
      (total = buttonName);
    }
  }

  if (buttonName === '+/-') {
    total *= -1;
  }

  if (buttonName === '%') {
    total /= 100;
  }

  if (buttonName === '.') {
    if (!total) {
      total = '0.';
    } else if (!total.includes('.')) {
      total += '.';
    }
  }

  if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(next, total, operation);
      next = null;
      operation = null;
    }
  }

  if (buttonName === '+') {
    if (total && next && operation) {
      operation = '+';
    } else if (total) {
      next = total;
      operation = '+';
      total = 0;
    }
  }

  if (buttonName === '-') {
    if (total && next && operation) {
      operation = '-';
    } else if (total) {
      next = total;
      operation = '-';
      total = 0;
    }
  }

  if (buttonName === 'X') {
    if (total && next && operation) {
      operation = 'X';
    } else if (total) {
      next = total;
      operation = 'X';
      total = 0;
    }
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
