'use strict';

const FULL_HEALTH = 100;
const BITE_DAMAGE = 50;
const HEALTH_AT_DEATH = 0;

class Animal {
  constructor(name, health = FULL_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

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
  bite(herbivore) {
    if (!(herbivore instanceof Carnivore) && !herbivore.hidden) {
      herbivore.health -= BITE_DAMAGE;
    }

    Animal.alive = Animal.alive.filter((animal) =>
      animal.health > HEALTH_AT_DEATH);
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
