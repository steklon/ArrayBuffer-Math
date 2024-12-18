import { Magician, Daemon } from "../CharacterHeirs";
import { characters } from "../characters";

describe("проверка функии newCharacterRules", () => {
  test("проверка создания персонажа с типом Magician", () => {
    const user = new Magician("user");

    expect(user).toEqual(characters.magician);
  });
  
  test("проверка создания персонажа с типом Daemon", () => {
    const user = new Daemon("user");

    expect(user).toEqual(characters.daemon);
  });
  
  test("проверка зависимости силы урона от расстояния", () => {
    const user = new Magician("user");
    user.attack = 100;
    user.distance = 2;

    expect(user.attack).toBe(90);
  });
  
  test("проверка зависимости силы урона от расстояния и дурмана", () => {
    const user = new Magician("user");
    user.attack = 100;
    user.distance = 2;
    user.stoned = true;

    expect(user.attack).toBe(85);
  });
  
  test("проверка при расчете силы атаки в значении меньше нуля", () => {
    const user = new Magician("user");
    user.attack = 4;
    user.distance = 6;
    user.stoned = true;

    expect(user.attack).toBe(0);
  });
  
  test("проверка нанесения урона на расстоянии больше допустимых значений", () => {
    const user = new Magician("user");
    user.attack = 100;
    user.distance = 13;
    user.stoned = true;

    expect(user.attack).toBe(0);
  });
});