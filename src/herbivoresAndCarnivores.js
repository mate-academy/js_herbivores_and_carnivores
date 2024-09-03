'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
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

  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
    }

    const index = Animal.alive.findIndex((item) => item.health <= 0);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }

    return herbivore.health;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
