'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  static updateAlives() {
    Animal.alive = Animal.alive.filter((el) => el.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
      Animal.updateAlives();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
