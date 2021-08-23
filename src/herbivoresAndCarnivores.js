'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100,) {
    this.name = name;
    this.health = health;
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
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health === 0) {
      Animal.alive.splice(Animal.alive.health);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
