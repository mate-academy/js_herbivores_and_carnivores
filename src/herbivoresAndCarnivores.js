'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
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

  updateHealth(health) {
    this.health += health;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    Animal.alive.splice(Animal.alive.indexOf(this), 1);
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.updateHealth(-50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
