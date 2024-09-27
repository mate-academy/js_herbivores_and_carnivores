'use strict';

class Animal {
  constructor(health, name) {
    this.health = 100;
    this.name = name;
    Animal.addToAlive(this);
  }

  static alive = [];

  static addToAlive(animal) {
    this.alive.push(animal);
  }

  static removeFromAlive(animal) {
    const index = this.alive.indexOf(animal);

    if (index !== -1) {
      this.alive.splice(index, 1);
    }
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
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.removeFromAlive(target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
