'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
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
