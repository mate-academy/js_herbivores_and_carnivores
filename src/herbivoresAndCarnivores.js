'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
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
  bite(animalAlive) {
    if (animalAlive instanceof Herbivore && animalAlive.hidden === false) {
      animalAlive.health -= 50;
    }

    if (animalAlive.health === 0) {
      Animal.alive = Animal.alive.filter(currentAnimal =>
        currentAnimal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
