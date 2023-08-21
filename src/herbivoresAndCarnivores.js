'use strict';

const TOTAL_HEALTH = 100;
const BITE_STRENGTH = 50;

class Animal {
  static alive = [];
  constructor(name, health = TOTAL_HEALTH) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (isHerbivore && !animal.hidden) {
      animal.health -= BITE_STRENGTH;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter(({ health }) => health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
