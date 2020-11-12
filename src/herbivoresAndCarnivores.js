'use strict';

class Animal {
  static method() {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].name === this.name) {
        return;
      }
    }
    Animal.alive.push(this);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.method.call(this);
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
  bite(animal) {
    if (!(animal instanceof Carnivore)
    && !animal.hidden) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      const eaten = Animal.alive.findIndex(elem => elem.name === animal.name);

      Animal.alive.splice((eaten - 1), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
