import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let {
    total, next, operation,
  } = dataObject;

  if (buttonName === 'AC') {
    total = null;
    next = null; 
    operation = null;
  } else if (buttonName === '+/-') {
    if (total) {
      total *= -1;
    }
    if (next) {
      next *= -1;
    }
    if (next && !next.includes('.')) {
      next += '.';
    } else if (operation && !next) {
      next = '0.';
    } else if (total && !total.includes('.')) {
      total += '.';
    }
  } else if (buttonName === '=') {
    if (next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (next && operation) {
    total = operate(total, next, operation);
    next = null;
    operation = buttonName;
  } else {
    operation = buttonName;
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
