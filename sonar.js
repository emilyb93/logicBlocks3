exports.sonarSweep = (sweepData) => {
  const splitSweepData = sweepData.split("\n");
  let count = 0;

  for (let i = 1; i < splitSweepData.length; i++) {
    const firstNum = Number(splitSweepData[i - 1]);
    const secondNum = Number(splitSweepData[i]);

    if (secondNum > firstNum) {
      count++;
    }
  }

  return count;
};
