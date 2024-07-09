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
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
    this.class = 'herb';
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.class = 'carn';
  }

  bite(herb) {
    if (!herb.hidden && herb.class !== 'carn') {
      herb.health -= 50;

      if (herb.health <= 0) {
        Animal.alive = Animal.alive.filter((el) => el.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
