'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.filterDeadAnimal = (animal) => {
  Animal.alive = Animal.alive.filter(beast => beast !== animal);
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
    const biteForce = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= biteForce;

      if (animal.health <= 0) {
        Animal.filterDeadAnimal(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
