import isPerfect from "../src/index.js";

test("isPerfect", () => {
  expect(isPerfect(6)).toEqual(true);
  expect(isPerfect(28)).toEqual(true);
  expect(isPerfect(496)).toEqual(true);
  expect(isPerfect(8128)).toEqual(true);
});

test("isPerfect false", () => {
  expect(isPerfect(321)).toEqual(false);
  expect(isPerfect(57775)).toEqual(false);
  expect(isPerfect(32)).toEqual(false);
  expect(isPerfect(5432)).toEqual(false);
});
