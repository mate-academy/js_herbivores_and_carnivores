'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Herbivore.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Carnivore.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden !== true) {
      herbivore.health = herbivore.health - 50;
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
