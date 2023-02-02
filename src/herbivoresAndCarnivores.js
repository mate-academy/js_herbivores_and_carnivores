'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.born(this);
  }
}

Animal.alive = [];

Animal.born = (animal) => {
  Animal.alive.push(animal);
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
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(target), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
