// import function from local file
const findShortestString = require("./shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findShortestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint short strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["avocado", "bananas", "apricot"])).toBe("avocado");
  expect(findShortestString(["sky", "sea", "hat"])).toBe("sky");
});
