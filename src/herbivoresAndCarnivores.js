'use strict';

class Animal {
  static MAX_HEALTH = 100;
  static MIN_HEALTH = 0;
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = Animal.MAX_HEALTH;
    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= Animal.MIN_HEALTH) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
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

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health = Math.max(Animal.MIN_HEALTH, prey.health - 50);
      prey.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
