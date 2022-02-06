'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
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

  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden !== true) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item !== animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
