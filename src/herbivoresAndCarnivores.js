'use strict';

const DEFAULT_HEALTH_POINTS = 100;
const DAMAGE_OF_BITE = 50;
const DEFAULT_HIDE = false;

class Animal {
  static alive = [];

  constructor(name, health = DEFAULT_HEALTH_POINTS) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = DEFAULT_HIDE) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(targetAnimal) {
    if (targetAnimal instanceof Herbivore && !targetAnimal.hidden) {
      targetAnimal.health -= DAMAGE_OF_BITE;
    }

    Animal.alive = Animal.alive.filter((aliveAnimal) => aliveAnimal.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
