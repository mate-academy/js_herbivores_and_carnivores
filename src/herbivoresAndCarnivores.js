'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);
  }

  bite(animal) {
    if (!animal.hidden) {
      animal.health -= 50;
      Animal.alive = Animal.alive.filter(p => p.health > 0);

      if (animal instanceof Carnivore) {
        animal.health = this.health;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
