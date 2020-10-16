import * as helpers from "./helpers";

describe("generateRandomInteger tests", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "floor").mockReturnValueOnce(-100);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "floor").mockRestore();
  });

  it("Should return a value between -100 and 100", () => {
    const result = helpers.generateRandomInteger(-100, 100);
    expect(result).toEqual(-100);
  });
});
