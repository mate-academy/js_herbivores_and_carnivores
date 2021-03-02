'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health = animal.health - 50;
    }
    Animal.alive = Animal.alive.filter(beast => beast.health !== 0);

    return Animal.alive;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
