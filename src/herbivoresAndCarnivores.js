'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;

    if (!health) {
      this.health = 100;
    } else {
      this.health = health;
    }
    this.hidden = false;
  }

  die() {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health <= 0) {
        delete Animal.alive[i];
      }
    }
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    super.die();
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
