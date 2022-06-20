'use strict';

class Animal {
  static alive = [];

  static removeAnimal(animal) {
    delete this.alive[this.alive.indexOf(animal)];
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(hebrivore) {
    if (!hebrivore.hidden && hebrivore instanceof Herbivore) {
      hebrivore.health -= 50;

      if (hebrivore.health === 0) {
        Animal.removeAnimal(hebrivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
