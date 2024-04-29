'use strict';

const DEFAULT_ANIMAL_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = DEFAULT_ANIMAL_HEALTH;
    Animal.alive.push(this);
  }

  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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

  receiveBite() {
    if (!this.hidden) {
      this.health -= BITE_DAMAGE;

      if (this.health <= 0) {
        Animal.removeDeadAnimals();
      }
    }
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore) {
      beast.receiveBite();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
