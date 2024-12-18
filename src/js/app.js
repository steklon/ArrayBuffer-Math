import { Magician, Daemon } from "./CharacterHeirs";

const userMagician = new Magician("userMagic");
const userDaemon = new Daemon("userDaemon");

userMagician.distance = 6;
userMagician.attack = 4;
userMagician.stoned = true;

userDaemon.distance = 2;
userDaemon.attack = 100;
userDaemon.stoned = true;

console.log(userMagician.attack);
console.log(userDaemon.attack);