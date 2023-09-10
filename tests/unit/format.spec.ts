/*
 * @Author: cola
 * @Date: 2023-08-18 10:53:29
 * @LastEditors: cola
 * @Description:
 */
import { describe, expect, test } from "vitest";
import { format } from "~/utils";

describe("date utils", async () => {
  test("normal date", () => {
    const time = new Date("2023-08-23");
    const res = format(time);
    expect(res).toEqual("2023-08-23 08:00:00");
  });
  test("invalid date", () => {
    const time = new Date("abc");
    expect(() => format(time)).toThrowError("Invalid Date");
  });
});
