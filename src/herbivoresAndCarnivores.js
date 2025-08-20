'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    // Track every alive animal instance
    Animal.alive.push(this);
  }
}

// Static storage for alive animals
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    this.health = 100;
  }

  bite(target) {
    // Only affect herbivores that are not hidden
    if (!(target instanceof Herbivore)) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    target.health = Math.max(0, target.health - 50);

    if (target.health === 0) {
      const indexInAlive = Animal.alive.indexOf(target);

      if (indexInAlive !== -1) {
        Animal.alive.splice(indexInAlive, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
