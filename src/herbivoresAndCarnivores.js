'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
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
        delete Animal.alive[Animal.alive.indexOf(herb)];
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
