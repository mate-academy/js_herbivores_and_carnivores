'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
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
  bite(animal) {
    if (animal.hidden === false && animal instanceof Animal) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
    // eslint-disable-next-line
      const beastIndex = Animal.alive.findIndex(el => el.health <= 0 && el.name === animal.name);

      if (beastIndex >= 0) {
        Animal.alive.splice(beastIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
