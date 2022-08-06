const getCorrespondingCharacter = (character) => {
  switch (character) {
    case '(':
      return ')';
    case '[':
      return ']';
    case '{':
      return '}';
    default:
      return '';
  }
};

const isOpenCharacter = (character) => {
  return character === '(' || character === '[' || character === '{';
};

const isValid = (s) => {
  if (s.length % 2 !== 0) return false;
  if (')}]'.includes(s[0])) return false;
  const openStack = [];

  for (index = 0; index < s.length; index++) {
    console.log(`current character: ${s[index]}, stack element: ${openStack}`);
    if (isOpenCharacter(s[index])) openStack.push(s[index]);
    else {
      if (openStack.length === 0 && ')}]'.includes(s[index])) return false;
      if (
        s[index] === getCorrespondingCharacter(openStack[openStack.length - 1])
      ) {
        openStack.pop();
      } else break;
    }
  }

  // stack is empty means that the string is valid
  if (openStack.length === 0) return true;
  return false;
};

const test1 = '(){[]}';
const test2 = '{{}[][[[]]]}';
const test3 = "(){}}{";
console.log('test1: ', isValid(test1));
console.log('test2: ', isValid(test2));
console.log('test3: ', isValid(test3));
