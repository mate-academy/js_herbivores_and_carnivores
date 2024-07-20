'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }

  static addAliveAnimals(item) {
    Animal.alive.push(item);
  }

  static removeAnimals() {
    Animal.alive = Animal.alive.filter((item) => item.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.addAliveAnimals(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.addAliveAnimals(this);
  }

  bite(item) {
    if (item instanceof Herbivore && !item.hidden) {
      item.health -= 50;
      Animal.removeAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
