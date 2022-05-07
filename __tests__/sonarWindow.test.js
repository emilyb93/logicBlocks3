const { sonarWindow } = require("../sonarWindow.js");
const { readFileSync } = require("fs");

describe("sonarWindow", () => {
  test("should take an input string and return a number", () => {
    const testSweep = "";
    expect(typeof sonarWindow(testSweep)).toBe("number");
  });

  test("should be able to check one window against another for an increase", () => {
    const testSweep1 = "1\n3\n5\n7";
    expect(sonarWindow(testSweep1)).toBe(1);

    const testSweep2 = "10\n12\n10\n8";
    expect(sonarWindow(testSweep2)).toBe(0);
  });

  test("should be able to check the windows of data of an unknown size", () => {
    const testSweep = `199\n200\n208\n210\n200\n207\n240\n269\n260\n263\n`;
    expect(sonarWindow(testSweep)).toBe(5);
  });
});

const morbiusSweep = readFileSync("./input.txt", "utf-8");

console.log(sonarWindow(morbiusSweep));
