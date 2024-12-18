import Character from "./Character";

export default class NewCharacterRules extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 10;
    this.dope = false;
  }

  get stoned() {
    return this.dope;
  }

  set stoned(isMeaning) {
    this.dope = isMeaning;
  }

  get attack() {
    let distancePower = 0;
    if (this.distance > 0 && this.distance < 11) {
      distancePower = ((100 - (this.distance - 1) * 10) * this.characterAttack) / 100;

      if (this.stoned) {
        distancePower = distancePower - Math.log2(this.distance) * 5;
        if (distancePower < 0) {
          distancePower = 0;
        }
      }
    }

    return distancePower;
  }

  set attack(characterAttack) {
    this.characterAttack = characterAttack;
  }
}