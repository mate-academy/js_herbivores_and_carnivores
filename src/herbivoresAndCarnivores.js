'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(Object(this));
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      const filtred = Animal.alive.filter((item) => item.name !== animal.name);

      Animal.alive = filtred;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
