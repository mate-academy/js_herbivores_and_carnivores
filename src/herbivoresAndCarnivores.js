'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static removeDeadAnimal(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.removeDeadAnimal(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
