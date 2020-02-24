import { uuid } from "../util";

test("uuid should generate unique values each time", () => {
  const uuids = [...Array(1000).keys()].map(i => uuid());
  const uniques = [...new Set(uuids)];
  expect(uuids.length).toEqual(uniques.length);
});
