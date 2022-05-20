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
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;

    }
  }
}

class Carnivore extends Animal {
  bite(bist) {
    if (bist instanceof Herbivore && bist.hidden === false) {
      bist.health -= 50;
    }

    if (bist.health <= 0) {
      Animal.alive = Animal.alive.filter(cutie => cutie !== bist);
    }

  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
