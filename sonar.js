exports.sonarSweep = (sweepData) => {
  const splitData = sweepData.split("\n");
  let count = 0;

  for (let i = 1; i < splitData.length; i++) {
    const firstNum = Number(splitData[i - 1]);
    const secondNum = Number(splitData[i]);

    if (secondNum > firstNum) {
      count++;
    }
  }

  return count;
};
