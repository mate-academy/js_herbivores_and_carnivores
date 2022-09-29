'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
  }

  bite(herbivore) {
    if (herbivore instanceof Carnivore === false && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive.splice(herbivore);
    }
  }
}

/*
Create a Сarnivore class. Carnivore has a bite method, which
takes a herbivore object and decreases the object's health
by 50. The method does not work if it is another сarnivore,
or the herbivore is currently hiding.

All alive animals should be in the static Animal.alive array.
If the health of the animal reaches 0, the beast dies and
it should be removed from the static array Animals.alive.
*/

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
