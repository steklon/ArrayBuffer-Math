import Character from "../Character";

const character = {
  name: "user",
  type: "Bowman",
  level: 1,
  health: 100
};

describe('checking the operation of the Character function', () => {
  test('character creation', () => {
    expect(new Character("user", "Bowman")).toEqual(character);
  });

  test("error checking when name is not a string", () => {
    expect(() => new Character(["user"], "Bowman")).toThrow();
  });
  
  test("error checking minimum number of characters in the name", () => {
    expect(() => new Character("u", "Bowman")).toThrow();
  });
  
  test("error checking maximum number of characters in the name", () => {
    expect(() => new Character("vilisipidisti", "Bowman")).toThrow();
  });
  
  test("error checking when type is not allowed", () => {
    expect(() => new Character("user", "RamboMambo")).toThrow();
  });
});