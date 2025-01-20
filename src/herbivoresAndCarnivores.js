'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return null;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      herbivore.die();
    }

    return undefined;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
