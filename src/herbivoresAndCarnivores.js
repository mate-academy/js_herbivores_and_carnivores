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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    const BITE_CARNIVORE = 50;

    if (herbivore.hidden === false) {
      herbivore.health -= BITE_CARNIVORE;
    }

    if (herbivore.health === 0) {
      for (let i = 0; i < Animal.alive.length; i++) {
        const health = Animal.alive[i].health;
        const name = Animal.alive[i].name;

        if (health === 0 && name === herbivore.name) {
          delete Animal.alive[i];
          break;
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
