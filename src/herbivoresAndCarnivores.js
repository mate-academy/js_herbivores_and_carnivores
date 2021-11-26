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
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// new
