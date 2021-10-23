'use strict';

class Animal {
  static alive = [];
  static checkHealth() {
    this.alive = this.alive.filter(animal => animal.health > 0);
  }
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
