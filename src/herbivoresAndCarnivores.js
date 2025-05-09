'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(herb) {
    if (!(herb instanceof Herbivore) || herb.hidden === true) {
      return;
    }

    herb.health -= 50;

    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
