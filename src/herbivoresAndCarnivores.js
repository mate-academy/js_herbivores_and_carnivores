'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    const i = Animal.alive.indexOf(this);

    if (i !== -1) {
      Animal.alive.splice(i, 1);
    }
  }
}

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
    if (!(herbivore instanceof Herbivore)) {
      return;
    }

    if (herbivore.hidden === true) {
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
