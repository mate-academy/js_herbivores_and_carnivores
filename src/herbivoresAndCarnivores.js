'use strict';

class Animal {
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(carnivore) {
    if (carnivore.hidden === false) {
      carnivore.health -= 50;
    }

    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health <= 0) {
        Animal.alive.splice(i, 1);
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
