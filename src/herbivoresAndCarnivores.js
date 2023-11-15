'use strict';

class Animal {
  static alive = [];
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore
       || (target instanceof Herbivore && target.hidden)) {
      return;
    }

    target.health -= 50;
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
