'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];

  static deadAnimal() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(someone) {
    if (someone instanceof Carnivore || someone.hidden) {
      return;
    }
    someone.health -= 50;
    Animal.deadAnimal();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
