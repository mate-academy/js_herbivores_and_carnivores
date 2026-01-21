'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.constructor.registrar(this);
  }

  static registrar(animal) {
    this.alive.push(animal);
  }

  die() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(x) {
    if (x instanceof Herbivore && x.hidden === false) {
      x.health -= 50;

      if (x.health <= 0) {
        x.die();
      }
    }
  }
}

module.exports.default = {
  Animal,
  Herbivore,
  Carnivore,
};
