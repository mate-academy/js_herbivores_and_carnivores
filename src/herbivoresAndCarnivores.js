'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;

      if (beast.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
