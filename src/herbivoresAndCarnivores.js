'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
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
