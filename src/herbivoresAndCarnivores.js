'use strict';

const DEFOLT_HEALTH_VALUE = 100;
const BITE_DAMAGE = 50;

class Animal {
  constructor(name) {
    this.health = DEFOLT_HEALTH_VALUE;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(herbivore) {
    if (herbivore.hidden === true || !herbivore.hasOwnProperty('hidden')) {
      return;
    }

    herbivore.health -= BITE_DAMAGE;

    if (herbivore.health <= 0) {
      const indexOfAnimal = Animal.alive.indexOf(herbivore);

      Animal.alive.splice(indexOfAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
