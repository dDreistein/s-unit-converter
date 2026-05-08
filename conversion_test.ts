import { assertAlmostEquals, assertThrows } from "@std/assert";
import { convertToMeters } from "./conversion.ts";

Deno.test("convert 1 league to meters", () => {
  assertAlmostEquals(convertToMeters(1, "league"), 4828.032);
});

Deno.test("convert 1 mile to meters", () => {
  assertAlmostEquals(convertToMeters(1, "mile"), 1609.344);
});

Deno.test("convert 1 yard to meters", () => {
  assertAlmostEquals(convertToMeters(1, "yard"), 0.9144);
});

Deno.test("convert 1 foot to meters", () => {
  assertAlmostEquals(convertToMeters(1, "foot"), 0.3048);
});

Deno.test("convert 1 inch to meters", () => {
  assertAlmostEquals(convertToMeters(1, "inch"), 0.0254);
});

Deno.test("convert 1 centimeter to meters", () => {
  assertAlmostEquals(convertToMeters(1, "centimeter"), 0.01);
});

Deno.test("convert 1 meter to meters", () => {
  assertAlmostEquals(convertToMeters(1, "meter"), 1);
});

Deno.test("convert 1 furlong to meters", () => {
  assertAlmostEquals(convertToMeters(1, "furlong"), 201.168)
})

Deno.test("unknown unit throws", () => {
  assertThrows(() => convertToMeters(1, "unknown_unit"), Error, "unknown unit");
});

