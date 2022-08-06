const buildSnowman = (input) => {
  const convertedInput = input.split(/\r?\n/);
  let snowballs = convertedInput[1].split(' ');
  let numberOfSnowman = 0;

  while ([...new Set(snowballs)].length >= 3) {
    let currentArray = [];
    let indexArray = [];
    console.log('new building');
    for (let index = 0; index < snowballs.length; index++) {
      if (!currentArray.includes(snowballs[index])) {
        currentArray.push(snowballs[index]);
        indexArray.push(index);
      }

      if (currentArray.length === 3) {
        console.log('snowman: ', currentArray);
        numberOfSnowman++;
        snowballs = snowballs.filter(
          (ball, index) => !indexArray.includes(index)
        );

        currentArray = [];
        indexArray = [];

        console.log('remain snowballs', snowballs);
        break;
      }
    }
  }

  return numberOfSnowman;
};

const input = `7
1 2 3 4 2 2 7`;
console.log(buildSnowman(input));
