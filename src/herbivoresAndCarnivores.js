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
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const targetAnimal = Animal.alive.find((animal) => animal === target);
    const targetAnimalIndex = Animal.alive.indexOf(targetAnimal);

    if (targetAnimal.hidden === true || targetAnimal instanceof Carnivore) {
      return;
    }

    targetAnimal.health -= 50;

    if (targetAnimal.health === 0) {
      Animal.alive.splice(targetAnimalIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
