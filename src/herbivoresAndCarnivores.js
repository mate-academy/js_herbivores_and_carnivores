'use strict';

class Animal {
  static addAnimal(anim) {
    this.alive.push(anim);
  }
  static removeAnimal(anim) {
    Animal.alive = Animal.alive.filter(animal => animal !== anim);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.addAnimal(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.addAnimal(this);
  }
  bite(sb) {
    if (sb instanceof Herbivore && sb.hidden !== true) {
      sb.health = sb.health - 50;
    }

    if (sb.health === 0) {
      Animal.removeAnimal(sb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
