'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
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
  bite(damage) {
    if (damage instanceof Herbivore && damage.hidden === false) {
      damage.health -= 50;
    }

    if (damage.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(damage));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
