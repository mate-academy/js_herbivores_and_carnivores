'use strict';

function getAliveAnimals(animals) {
  return animals.filter(animal => animal.health !== 0);
}
class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    Animal.alive = getAliveAnimals(Animal.alive);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
