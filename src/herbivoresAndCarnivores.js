'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.removeDeadAnimal = function(animal) {
  Animal.alive = Animal.alive.filter((dead) => dead.health > 0);
};

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
    if (target instanceof Carnivore || target.hidden) {
      return;
    }

    target.health -= 50;

    Animal.removeDeadAnimal(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
