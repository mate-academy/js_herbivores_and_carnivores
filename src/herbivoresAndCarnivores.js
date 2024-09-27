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
  bite(herbivore) {
    if (herbivore.constructor.name === 'Herbivore'
    && herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive.sort(
        (currentAnimal, nextAnimal) =>
          nextAnimal.health - currentAnimal.health).pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
