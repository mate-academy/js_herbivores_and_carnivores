'use strict';

class Animal {
  constructor(
    name,
    health = 100,
  ) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    name,
    health,
    hidden = false,
  ) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const findTarget = Animal.alive.find(animal => animal.name === target.name);
    const targetIndex = Animal.alive.indexOf(target);

    if (target instanceof Carnivore) {
      return;
    };

    if (target instanceof Herbivore && target.health === 0) {
      return;
    }

    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
      findTarget.health -= 50;

      if (findTarget.health === 0) {
        Animal.alive.splice(targetIndex, 1);
      }
    } else {

    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
