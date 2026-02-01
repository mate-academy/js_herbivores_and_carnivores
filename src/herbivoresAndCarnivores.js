'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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

// eslint-disable-next-line no-unused-vars
class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(target) {
    // cannot bite non-herbivores
    if (!(target instanceof Herbivore)) {
      return;
    }

    // cannot bite hidden herbivores
    if (target.hidden) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      target.die();
    }
  }
}
