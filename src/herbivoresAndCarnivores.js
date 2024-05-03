'use strict';

class Animal {
  static alive = [];

  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide(hidden) {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden !== true && animal instanceof Herbivore) {
      animal.health = animal.health - 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter((a) => {
        return a !== animal;
      });
    }
  }
}

const lion = new Carnivore('');
const rabbit = new Herbivore('Raddit');

lion.bite(rabbit);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
