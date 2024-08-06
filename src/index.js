module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openBrackets = [];
  const closeBrackets = [];
  const bracketPair = {};

  bracketsConfig.forEach(pair => {
    openBrackets.push(pair[0]);
    closeBrackets.push(pair[1]);
    bracketPair[pair[1]] = pair[0];
  });

  for (let i = 0; i < str.length; i++) {
    const currentSymbol = str[i];
    const topElement = stack[stack.length - 1];

    if (openBrackets.includes(currentSymbol)) {
      //проверка прямых скобок
      if (currentSymbol === bracketPair[currentSymbol] && topElement === currentSymbol) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }



      if (bracketPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

