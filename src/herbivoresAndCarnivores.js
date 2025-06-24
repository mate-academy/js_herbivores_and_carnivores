'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
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
  bite(name) {
    if (name instanceof Herbivore && name.hidden !== true) {
      name.health = name.health - 50;
    }

    const array = Animal.alive.filter((x) => x.health !== 0);

    Animal.alive = array;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
