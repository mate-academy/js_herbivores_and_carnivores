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
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
