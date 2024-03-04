'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    Animal.alive.push(this);
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
  bite(canrivore) {
    if (canrivore instanceof Herbivore && !canrivore.hidden) {
      canrivore.health -= 50;

      if (canrivore.health === 0) {
        const newArray = [];

        for (const animal of Animal.alive) {
          if (animal !== canrivore) {
            newArray.push(animal);
          }
        }

        Animal.alive = newArray;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
