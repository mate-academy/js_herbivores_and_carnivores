'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    const isPossibleBite = herbivore.hidden !== true
      && herbivore instanceof Herbivore
      && herbivore.health >= 50

    if (isPossibleBite) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      const indexAnimal = Animal.alive.findIndex(item => item === herbivore);

      Animal.alive.splice(indexAnimal, 1);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
