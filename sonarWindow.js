exports.sonarWindow = (sweepData) => {
  const splitSweepData = sweepData.split("\n");

  let count = 0;

  function addWindows(total, a) {
    return total + Number(a);
  }

  //set the first window total
  let previousWindowTotal = splitSweepData.slice(0, 3).reduce(addWindows, 0);

  for (let i = 1; i < splitSweepData.length; i++) {
    //calculate the next window total
    const currentWindowTotal = splitSweepData
      .slice(i, i + 3)
      .reduce(addWindows, 0);

    // compare it against the previous
    if (currentWindowTotal > previousWindowTotal) {
      count++;
    }

    // reassign the previous total as this one, so we dont have to do 2 reduces each time
    previousWindowTotal = currentWindowTotal;
  }

  return count;
};
