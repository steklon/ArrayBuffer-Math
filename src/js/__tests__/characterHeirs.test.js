import { Bowman, Swordsman, Undead, Zombie } from "../CharacterHeirs";
import { characters } from "../characters";

test("checking method levelUp for live", () => {
  const user = new Bowman("user");
  user.health = 1;
  user.levelUp();

  expect(user).toEqual(characters.bowmanLevelUp);
});

test("checking method levelUp for deceased", () => {
  const user = new Swordsman("user");
  user.health = 0;

  expect(() => user.levelUp()).toThrow();
});

test("checking method demage for live", () => {
  const user = new Bowman("user");
  user.damage(10);

  expect(user).toEqual(characters.bowmanDamageLive);
});

test("checking method demage for deceased", () => {
  const user = new Bowman("user");
  user.health = 0;
  user.damage(10);

  expect(user).toEqual(characters.bowmanDamageDeceased);
});

test("checking method demage for health < 0", () => {
  const user = new Bowman("user");
  user.health = -1;
  user.damage(10);

  expect(user).toEqual(characters.bowmanDamageDeceased);
});

test("checking the Bowman function", () => {
  expect(new Bowman("user")).toEqual(characters.bowman);
});

test("checking the Swordsman function", () => {
  expect(new Swordsman("user")).toEqual(characters.swordsman);
});

test("checking the Undead function", () => {
  expect(new Undead("user")).toEqual(characters.undead);
});

test("checking the Zombie function", () => {
  expect(new Zombie("user")).toEqual(characters.zombie);
});