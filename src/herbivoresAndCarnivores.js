'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeFromAnimal(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (!(herb instanceof Herbivore) || herb.hidden) {
      return;
    }

    herb.health -= 50;

    if (herb.health <= 0) {
      Animal.removeFromAnimal(herb);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
