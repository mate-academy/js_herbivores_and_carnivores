'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDeadAnimal(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
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

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health < 0) {
      this.health = 0;
    }
    if (this.health === 0) {
      Animal.removeDeadAnimal(this);
    }
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Herbivore) || prey.hidden || prey.health <= 0) {
      return;
    }
    prey.decreaseHealth(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
