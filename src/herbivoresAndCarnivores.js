'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  handleBite() {}
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }

  handleBite() {
    if (this.hidden) {
      return;
    }
    this.health -= 50;

    if (this.health === 0) {
      Animal.alive = Animal.alive.filter((el) => el !== this);
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    animal.handleBite();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
