'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(object) {
    if (
      Object.getPrototypeOf(object) !== Carnivore
      && object.hidden === false
    ) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      Animal.alive = Animal.alive.filter((element) => element.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
