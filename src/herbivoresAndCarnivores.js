'use strict';

class Animal {
  // write your code here
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;

  hide() {
    this.hidden = true;
  }

  unHide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (!(herbivore instanceof Herbivore) || herbivore.hidden) {
      return;
    }

    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      herbivore.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
