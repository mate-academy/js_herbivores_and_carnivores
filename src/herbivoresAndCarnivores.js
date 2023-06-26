'use strict';
class Animal {
  static alive(animals) {
    const alive = animals.filter(animal => animal.health > 0);

    return alive;
  }

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
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bited) {
    if (!bited.hidden && bited.hasOwnProperty('hidden')) {
      bited.health -= 50;
    }

    if (bited.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== bited);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
