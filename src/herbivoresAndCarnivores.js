'use strict';

class Animal {
  static addObj(obj) {
    this.alive.push(obj);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.addObj(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
