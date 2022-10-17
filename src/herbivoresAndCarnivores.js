'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    Animal.alive.push(this);
  }

  bite(name) {
    if (!name.hidden
      && Animal.alive.includes(name)
      && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health >= 0) {
      Animal.alive.splice(Animal.alive.indexOf(name), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
