import * as helpers from "./helpers";
import { sortUserWithCondition } from "./helpers";
import { ListOfUser } from "../types";

const jsonData: ListOfUser = [
  {
    id: 1,
    name: "Jane Doe",
    totalPoints: 157,
    clicks: 5
  },
  {
    id: 2,
    name: "Lily Allen",
    totalPoints: 234,
    clicks: 8
  },
  {
    id: 3,
    name: "John Smith",
    totalPoints: 390,
    clicks: 10
  }
];

describe("generateRandomInteger tests", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "floor").mockReturnValueOnce(-100);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "floor").mockRestore();
  });

  it("Should return a value between -100 and 100", () => {
    expect(helpers.generateRandomInteger(-100, 100)).toEqual(-100);
  });
});

describe("sortUserWithCondition tests", () => {
  it("Sort by total points", () => {
    const expected: ListOfUser = [
      {
        id: 3,
        name: "John Smith",
        totalPoints: 390,
        clicks: 10
      },
      {
        id: 2,
        name: "Lily Allen",
        totalPoints: 234,
        clicks: 8
      },
      {
        id: 1,
        name: "Jane Doe",
        totalPoints: 157,
        clicks: 5
      }
    ];

    expect(jsonData.sort((a, b) => sortUserWithCondition(a, b, false))).toEqual(expected);
  });

  it("sort by avg", () => {
    const expected: ListOfUser = [
      {
        id: 3,
        name: "John Smith",
        totalPoints: 390,
        clicks: 10
      },
      {
        id: 1,
        name: "Jane Doe",
        totalPoints: 157,
        clicks: 5
      },
      {
        id: 2,
        name: "Lily Allen",
        totalPoints: 234,
        clicks: 8
      }
    ];
    expect(jsonData.sort((a, b) => sortUserWithCondition(a, b, true))).toEqual(expected);
  });
});

describe("divideWithCondition tests", () => {
  it("Should return a positive divided value", () => {
    expect(helpers.divideWithCondition(10, 2)).toEqual(5);
  });

  it("Should return a negative divided value", () => {
    expect(helpers.divideWithCondition(-10, 2)).toEqual(-5);
  });

  it("Should return 0 on non divider", () => {
    expect(helpers.divideWithCondition(0, 2)).toEqual(0);
  });
});
