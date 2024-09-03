'use strict';

class Animal {
  static alive = [];

  static removeFromAlive(creature) {
    this.alive = this.alive.filter((animal) => animal !== creature);
  }

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    if (health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = true;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.removeFromAlive(herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
