'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    let shouldInclude = true;

    for (const animal of Animal.alive) {
      if (animal.name === this.name) {
        shouldInclude = false;
      }
    }

    if (shouldInclude === true) {
      Animal.alive.push(this);
    }
    Animal.alive.sort((a, b) => b.health - a.health);
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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health -= 50;
    }

    if (obj instanceof Herbivore && obj.health <= 0) {
      Animal.alive.pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
