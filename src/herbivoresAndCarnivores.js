'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];

  wound(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.dieAnimal();
    }
  }

  dieAnimal() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    if (!(target instanceof Carnivore || target.hidden)) {
      target.wound(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
