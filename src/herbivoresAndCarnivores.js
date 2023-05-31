'use strict';

class Animal {
  constructor(name) {
    Animal.alive.push(this);
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

Animal.removeDeadAnimals = () => {
  Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
};

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
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isAlive = Animal.alive.includes(animal);
    const isHidding = animal.hidden;

    if (isHerbivore && isAlive && !isHidding) {
      animal.health -= 50;
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
