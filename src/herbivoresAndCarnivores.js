'use strict';

class Animal {
  constructor(animal) {
    this.animal = animal;
    this.health = 100;
  }

  static removeAnimal(dead) {
    this.alive = this.alive.filter(animal => animal !== dead);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);

    this.hidden = false;
    this.typeAnimal = 'Herbivore';
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health === 0) {
      Animal.removeAnimal(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
