'use strict';

const MAX_HEALTH = 100;
const BITE_DAMAGE = 50;
const DEAD_VALUE = 0;

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = MAX_HEALTH;
    Animal.alive.push(this);
  }

  static delleteDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > DEAD_VALUE);
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
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= BITE_DAMAGE;
      Animal.delleteDeadAnimals();

      return `${this.name} bit ${target.name}`;
    } else {
      return `${this.name} can't bite ${target.name}`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
