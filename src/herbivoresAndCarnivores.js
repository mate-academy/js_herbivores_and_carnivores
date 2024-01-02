'use strict';

const DAMAGE_POWER = 50;
const MAX_HEALTH = 100;
const DEATH = 0;

class Animal {
  constructor(name, health = MAX_HEALTH,) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  animalAlive() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > DEATH);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= DAMAGE_POWER;
    }

    if (herbivore.health <= DEATH) {
      this.animalAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
