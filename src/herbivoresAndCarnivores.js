'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  dead(beast) {
    const index = Animal.alive.indexOf(beast);

    Animal.alive.splice(index, 1);
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
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;

      if (herb.health <= 0) {
        super.dead(herb);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
