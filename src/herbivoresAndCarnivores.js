'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    // Track every alive animal instance
    Animal.alive.push(this);
  }
}

// Static storage for alive animals
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health = Math.max(0, target.health - 50);
      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
