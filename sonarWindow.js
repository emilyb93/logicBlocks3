exports.sonarWindow = (inputData) => {
  const splitData = inputData.split("\n");

  let count = 0;

  function addWindows(total, a) {
    return total + Number(a);
  }

  for (let i = 0; i < splitData.length; i++) {
    const firstWindowTotal = splitData.slice(i, i + 3).reduce(addWindows, 0);
    const secondWindowTotal = splitData
      .slice(i + 1, i + 4)
      .reduce(addWindows, 0);

    if (secondWindowTotal > firstWindowTotal) {
      count++;
    }
  }

  return count;
};
