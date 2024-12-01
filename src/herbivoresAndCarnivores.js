'use strict';

class Animal {
  static increase(beast) {
    this.alive.push(beast);
  }

  static remove() {
    this.alive = this.alive.filter(({ health }) => health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.increase(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = true;
    Animal.increase(this);
  }

  bite(beest) {
    if (!beest.hidden) {
      beest.health -= 50;
    }

    if (beest.hidden <= 0) {
      Animal.remove();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
