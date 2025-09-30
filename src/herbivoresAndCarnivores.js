'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(herbivoreBeast) {
    if (herbivoreBeast instanceof Herbivore) {
      if (!herbivoreBeast.hidden) {
        herbivoreBeast.health -= 50;
      }
    }

    if (herbivoreBeast.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== herbivoreBeast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
