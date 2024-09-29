'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(animal) {
    if (animal.hasOwnProperty('hidden')) {
      if (!animal.hidden) {
        animal.health -= 50;
      }

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(
          (aliveAnimal) => aliveAnimal !== animal,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
