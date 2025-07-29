// script.js
document.addEventListener('DOMContentLoaded', () => {
  const screen = document.getElementById('screen');
  const keys = document.querySelector('.calculator-keys');

  let currentInput = '';
  let operator = null;
  let firstOperand = null;
  let waitingForSecondOperand = false;

  function inputDigit(digit) {
    if (waitingForSecondOperand) {
      currentInput = digit;
      waitingForSecondOperand = false;
    } else {
      currentInput = currentInput === '0' ? digit : currentInput + digit;
    }
    updateScreen();
  }

  function inputDecimal(dot) {
    if (waitingForSecondOperand) {
      currentInput = '0.';
      waitingForSecondOperand = false;
    } else if (!currentInput.includes(dot)) {
      currentInput += dot;
    }
    updateScreen();
  }

  function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);
    if (operator && waitingForSecondOperand) {
      operator = nextOperator;
      return;
    }
    if (firstOperand == null && !isNaN(inputValue)) {
      firstOperand = inputValue;
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      currentInput = String(result);
      firstOperand = result;
      updateScreen();
    }
    operator = nextOperator;
    waitingForSecondOperand = true;
  }

  function calculate(first, second, op) {
    if (op === '+') return first + second;
    if (op === '-') return first - second;
    if (op === '*') return first * second;
    if (op === '/') return second === 0 ? 'Error' : first / second;
    return second;
  }

  function resetCalculator() {
    currentInput = '';
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = false;
    updateScreen();
  }

  function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateScreen();
  }

  function updateScreen() {
    screen.value = currentInput || '0';
  }

  keys.addEventListener('click', event => {
    const { target } = event;
    if (!target.matches('button')) return;

    if (target.dataset.number) {
      inputDigit(target.dataset.number);
    } else if (target.dataset.action === '.') {
      inputDecimal('.');
    } else if (target.dataset.action === 'clear') {
      resetCalculator();
    } else if (target.dataset.action === 'delete') {
      deleteLast();
    } else if (target.dataset.action === '=') {
      handleOperator(operator);
      operator = null;
    } else if (target.dataset.action && ['+', '-', '*', '/'].includes(target.dataset.action)) {
      handleOperator(target.dataset.action);
    }
  });

  // initialize
  resetCalculator();
});
