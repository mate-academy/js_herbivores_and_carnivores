'use strict';

class Animal {
  static aliveAnimal = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.aliveAnimal.push(this);
  }
  static get alive() {
    return Animal.aliveAnimal.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
