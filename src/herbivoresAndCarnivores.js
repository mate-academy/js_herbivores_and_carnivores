'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static deadAnimal() {
    Animal.alive = Animal.alive.filter(prey =>
      prey.health > 0);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.deadAnimal();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
