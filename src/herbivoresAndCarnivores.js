'use strict';

const allAnimal = [];

class Animal {
  static alive() {
    return allAnimal.filter(item => item.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    allAnimal.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    allAnimal.push(this);
  }

  bite(name) {
    if (name.hidden === true || name instanceof Carnivore) {
      return;
    }
    name.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
