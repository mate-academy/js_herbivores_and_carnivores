'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    const isAnimalAlive = Animal.alive.filter((item) => item.health > 0);

    Animal.alive = isAnimalAlive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
