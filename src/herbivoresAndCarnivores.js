'use strict';

class Animal {
  // linter does not allow because of Node.js and eslint versions;
  // static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    this.alive += `hidden: ${this.hidden}`;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (!name.hidden && name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.alive = Animal.alive.filter(anim => anim.name !== name.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
