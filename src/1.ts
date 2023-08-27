import { expect, test } from "vitest";
import { z } from "zod";
//       ^ 🕵️‍♂️

export const toString = (num: unknown) => {
  const param = z.number();
  param.parse(num);
  return String(num);
};

// TESTS

test("Should throw a runtime error when called with not a number", () => {
  expect(() => toString("123")).toThrowError(
    "Expected number, received string"
  );
});

test("Should return a string when called with a number", () => {
  expect(toString(1)).toBeTypeOf("string");
});
