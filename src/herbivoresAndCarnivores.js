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
  bite(type) {
    if (type instanceof Herbivore && type.hidden === false) {
      type.health -= 50;

      if (type.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== type);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
