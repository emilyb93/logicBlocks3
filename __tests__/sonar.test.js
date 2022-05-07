const { sonarSweep } = require("../sonar");
const { readFileSync } = require("fs");

describe("sonarSweep", () => {
  test("should take a string and return a number", () => {
    const testSweep = "";
    expect(typeof sonarSweep(testSweep)).toBe("number");
  });

  test("should be able to count when a number in a sequence is lower than the previous number", () => {
    const testSweep1 = "10\n9";

    expect(sonarSweep(testSweep1)).toBe(0);

    const testSweep2 = "9\n10";

    expect(sonarSweep(testSweep2)).toBe(1);
  });

  test("should be able to iterate over a dataset of unknown size", () => {
    const testSweep = `199\n200\n208\n210\n200\n207\n240\n269\n260\n263\n`;

    expect(sonarSweep(testSweep)).toBe(7);
  });
});

const inputData = readFileSync("./input.txt", "utf-8");

console.log(sonarSweep(inputData));
