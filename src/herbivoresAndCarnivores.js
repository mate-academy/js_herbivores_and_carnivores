'use strict';

class Animal {
  static alive = [];

  name = '';
  health = 0;

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static isAlive() {
    Animal.alive = Animal.alive.filter((item) => item.health !== 0);
  }
}

class Herbivore extends Animal {
  hidden;

  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static BITE_DMG = 50;

  bite(herbivore) {
    if (herbivore instanceof Herbivore) {
      if (!herbivore.hidden) {
        herbivore.health -= Carnivore.BITE_DMG;
      }

      Animal.isAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
