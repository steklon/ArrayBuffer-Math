import { nameValidityCheck, typeValidityCheck, isHealth } from "./dataValidityCheck";

export default class Character {
  constructor(name, type)  {
    nameValidityCheck(name);
    typeValidityCheck(type);

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    isHealth(this.health);

    this.level += 1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    this.health = 100;
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } 

    if (this.health < 0) {
      this.health = 0;
    }
  }
}
