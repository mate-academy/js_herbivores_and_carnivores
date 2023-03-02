'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

Animal.checkIsAlive = () => {
  for (const animal of Animal.alive) {
    if (animal.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
};

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      Animal.checkIsAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
