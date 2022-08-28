'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
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
  bite(animals) {
    const findAnimal = Animal.alive.find(item => item === animals);
    const whereIsAnimal = Animal.alive.indexOf(findAnimal);

    if (animals.hidden !== true && animals instanceof Herbivore) {
      animals.health -= 50;
    }

    if (animals.health === 0) {
      Animal.alive.splice(whereIsAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
