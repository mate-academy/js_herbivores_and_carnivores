'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  killIt() {
    const index = Animal.alive.indexOf(this);

    Animal.alive.splice(index, 1);
  }
}

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
  bite(animal) {
    if (!animal.hidden && (animal instanceof Herbivore)) {
      animal.health -= 50;

      if (animal.health <= 0) {
        animal.killIt();
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
