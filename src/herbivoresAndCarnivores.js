'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name = '') {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name = '', health = 100, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name = '', health = 100) {
    super(health, name);
  }

  bite(targer) {
    if (!(targer instanceof Carnivore) && !targer.hidden) {
      targer.health -= 50;

      if (targer.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== targer);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
