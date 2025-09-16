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

  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.health -= 50;
      }
    }

    Animal.alive = Animal.alive.filter((animal) => {
      return animal.health > 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
