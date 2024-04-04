'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
  static animalFilter() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;

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
  bite(obj) {
    if (!obj.hidden && obj instanceof Herbivore) {
      obj.health -= 50;
    }
    Animal.animalFilter();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
