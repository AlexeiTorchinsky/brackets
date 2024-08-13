module.exports = function check(str, bracketsConfig) {
  let stack = [];
  const openBrackets = [];
  const closedBrackets = [];
  const bracketPair = new Map();

  bracketsConfig.forEach((el) => {
    openBrackets.push(el[0]);
    closedBrackets.push(el[1]);
    bracketPair.set(el[0], el[1]);
  });

  for (let i = 0; i < str.length; i++) {
    //прямые скобки
    if (bracketPair.get(str[i]) === str[i]) {
      if (stack.length !== 0 && stack[stack.length - 1] === str[i]) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    }

    //остальные скобки
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    }

    if (closedBrackets.includes(str[i])) {
      if (
        str[i] === bracketPair.get(stack[stack.length - 1]) &&
        stack.length !== 0
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
