'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;

    Animal.alive.push(this);
  }
}

const MAX_HEALTH = 100;
const DEATH_HEALTH = 0;
const BITE_DAMAGE = 50;

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= BITE_DAMAGE;
    }

    if (prey.health <= DEATH_HEALTH) {
      Animal.alive = Animal.alive.filter(animal => animal !== prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
