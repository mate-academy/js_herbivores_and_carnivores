'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }

  decreaseHealth(value) {
    this.health -= value;

    if (this.health <= 0) {
      this.removeDeadAnimal();
    }
  }

  removeDeadAnimal() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden === false) {
      herb.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
