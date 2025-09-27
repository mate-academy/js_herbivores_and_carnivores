'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    this.record = { name: this.name, health: this.health, hidden: false };

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    this.record.hidden = this.hidden;
  }

  hide() {
    this.hidden = true;
    this.record.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast instanceof Herbivore && !beast.hidden) {
      beast.health -= 50;
      beast.record.health = beast.health;

      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
