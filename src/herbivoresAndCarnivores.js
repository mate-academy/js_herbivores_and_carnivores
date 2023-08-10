'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }

  afterBite(decreaseInHealth) {
    this.health -= decreaseInHealth;

    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
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

  bite(target) {
    if (!(target instanceof Herbivore) || target.hidden) {
      return `${this.name} can't bite ${target.name}`;
    }

    target.afterBite(50);

    return `${this.name} bit ${target.name}, `
    + `health decreased to ${target.health}`;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
