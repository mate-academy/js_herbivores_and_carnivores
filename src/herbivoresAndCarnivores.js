'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  static removeAnimal(animal) {
    Animal.alive.splice(Animal.alive.indexOf(animal), 1);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }

  receiveDamage(amount) {
    if (this.hidden) {
      return;
    }

    this.health -= amount;

    if (this.health <= 0) {
      Animal.removeAnimal(this);
    }
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    victim.receiveDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
