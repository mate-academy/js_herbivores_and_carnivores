'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.addAlive(this);
  }

  static addAlive(object) {
    Animal.alive.push(object);
  }

  static removeAlive(object) {
    Animal.alive.splice(Animal.alive.indexOf(object), 1);
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;

      return;
    }

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.removeAlive(herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
