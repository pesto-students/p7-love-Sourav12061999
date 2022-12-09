const { sum, minus, multiply, devide } = require("../index");
describe("Test", () => {
  test("Sum Testing", () => {
    expect(sum(2, 3)).toEqual(5);
    expect(sum(7, 8)).toEqual(15);
  });
  test("Minus Testing", () => {
    expect(minus(2, 3)).toEqual(-1);
    expect(minus(18, 8)).toEqual(10);
  });
  test("Multiply Testing", () => {
    expect(multiply(2, 3)).toEqual(6);
    expect(multiply(7, 8)).toEqual(56);
  });
  test("Devision Testing", () => {
    expect(devide(6, 3)).toEqual(2);
    expect(devide(64, 8)).toEqual(8);
  });
});
