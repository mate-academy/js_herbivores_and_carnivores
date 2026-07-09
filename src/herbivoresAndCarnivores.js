'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  dieIfNeeded() {
    if (this.health <= 0) {
      const idx = Animal.alive.indexOf(this);

      if (idx !== -1) {
        Animal.alive.splice(idx, 1);
      }
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
  bite(target) {
    // do nothing if target is a carnivore
    if (target instanceof Carnivore) {
      return;
    }

    // if target is hiding, bite has no effect
    if (target.hidden) {
      return;
    }

    if (typeof target.health === 'number') {
      target.health -= 50;
      target.dieIfNeeded();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
