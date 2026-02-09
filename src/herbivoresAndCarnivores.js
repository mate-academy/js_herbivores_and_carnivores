'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
  }

  changeHealth(damage) {
    const filtered = Animal.alive.filter((a) => a !== this);

    this.health -= damage;

    if (this.health <= 0) {
      Animal.alive = filtered;
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    const isCarnivore = animal instanceof Carnivore === true;
    const isHerbivore = animal instanceof Herbivore === true;
    const isHide = animal.hidden === true;

    if (isCarnivore) {
      return;
    }

    if (isHerbivore && !isHide) {
      animal.changeHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
