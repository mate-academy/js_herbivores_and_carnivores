'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
hidden = false;

hide() {
  if (this.hidden === false) {
    this.hidden = true;
  } else if (this.hidden === true) {
    this.hidden = false;
  }
}
}

class Carnivore extends Animal {
  bite(name) {
    if (name.hidden !== true &&
      name instanceof Herbivore) {
      name.health -= 50;
    }

    if (name.health === 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
