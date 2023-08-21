'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;

class Animal {
  static alive = [];

  constructor(name, health = MAX_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = MAX_HEALTH, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (isHerbivore && !animal.hidden) {
      animal.health -= BITE_DAMAGE;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(beast => beast.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
