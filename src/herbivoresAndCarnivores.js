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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature instanceof Herbivore && creature.hidden === false) {
      creature.health -= 50;
    }

    const deadAnimal = Animal.alive.indexOf(animal => animal.health === 0);

    Animal.alive.splice(deadAnimal, 1);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
