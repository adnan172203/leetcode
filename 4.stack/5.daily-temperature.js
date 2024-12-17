function dailyTemperatures(temperatures) {
  let stack = [];
  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    let currTemp = temperatures[i];

    while (stack.length > 0 && currTemp > stack[stack.length - 1].temp) {
      let { index } = stack.pop();

      result[index] = i - index;
    }

    stack.push({ temp: currTemp, index: i });
  }

  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(temperatures));

// [73,74,75,71,69,72,76,73]
// [1, 1, 4, 2, 1, 1, 0, 0 ]
