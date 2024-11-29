'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;

      if (herb.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herb);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
