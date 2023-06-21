'use strict';

class Animal {
  constructor(name = null) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return this;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.name = name;
  }

  bite(target) {
    if (target instanceof Carnivore || target.hidden) {
      return this;
    }

    target.health -= 50;

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }

    return this;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
