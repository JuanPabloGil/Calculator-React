import operate from '../logic/operate';

// Sum
test('Sum two integers', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('Sum two floats', () => {
  expect(operate(1.2, 5.2, '+')).toBe('6.4');
});

test('Sum one number and a zero', () => {
  expect(operate(1.2, 0, '+')).toBe('1.2');
});


// Substraction
test('Substraction two integers', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('Substraction two floats', () => {
  expect(operate(1.2, 5.2, '-')).toBe('-4');
});

test('Substraction one number and a zero', () => {
  expect(operate(-2, 0, '-')).toBe('-2');
});

// Multiplication
test('Multiplication two integers', () => {
  expect(operate(4, 24, 'X')).toBe('96');
});

test('Multiplication two floats', () => {
  expect(operate(1.5, 5.2, 'X')).toBe('7.8');
});

test('Multiplication one number and a zero', () => {
  expect(operate(-2, 0, 'X')).toBe('0');
});

// Divide
test('Divide two integers', () => {
  expect(operate(4, 24, '÷')).toBe('0.16666666666666666667');
});

test('Divide two floats', () => {
  expect(operate(1.5, 5.2, '÷')).toBe('0.28846153846153846154');
});

test('Divide one zero and a number', () => {
  expect(operate(0, -2, '÷')).toBe('0');
});
