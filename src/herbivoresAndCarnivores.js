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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      const i = Animal.alive.indexOf(herb);

      Animal.alive.splice(i, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
