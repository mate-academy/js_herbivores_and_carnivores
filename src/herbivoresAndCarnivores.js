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
  hidden = false;

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = !this.hidden;
    }
  }
}

class Carnivore extends Animal {

  bite(herbi) {
    if (herbi.__proto__ === Herbivore.prototype
        && herbi.health > 0
        && herbi.hidden === false) {
      herbi.health -= 50;
    }

    if (herbi.health <= 0) {
      Animal.alive.splice(herbi);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
