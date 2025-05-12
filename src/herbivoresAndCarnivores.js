'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  isAnimalAlive() {
    return this.health > 0;
  }

  isAnimalDead() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

Animal.alive = [];

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
  bite(targetAnimal) {
    if (!(targetAnimal instanceof Herbivore)) {
      return;
    }

    if (targetAnimal.hidden) {
      return;
    }

    targetAnimal.health -= 50;

    if (targetAnimal.health <= 0) {
      targetAnimal.isAnimalDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
