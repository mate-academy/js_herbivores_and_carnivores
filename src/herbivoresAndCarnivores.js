'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static addAliveAnimal(item) {
    Animal.alive.push(item);
  }

  static removeAnimal() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.addAliveAnimal(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.addAliveAnimal(this);
  }

  bite(item) {
    if (item instanceof Carnivore) {
      return;
    }

    if (item instanceof Herbivore && !item.hidden) {
      item.health -= 50;
    }

    Animal.removeAnimal();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
