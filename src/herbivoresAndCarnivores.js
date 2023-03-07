'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static die(animal) {
    Animal.alive = Animal.alive.filter(a => a !== animal);
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      target.health <= 0 && Animal.die(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
