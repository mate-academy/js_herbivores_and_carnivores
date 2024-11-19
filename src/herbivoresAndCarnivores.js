'use strict';

const MAX_HEALTH = 100;
const DAMAGE = 50;

class Animal {
  static alive = [];
  health = MAX_HEALTH;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // constructor(name) {
  //   super(name);
  //   this.hidden = false;
  // }
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(selectedHerbivore) {
    if (
      !selectedHerbivore.hidden &&
      // Object.hasOwn(selectedHerbivore, 'hidden')
      selectedHerbivore instanceof Herbivore
    ) {
      selectedHerbivore.health = selectedHerbivore.health - DAMAGE;
    }

    if (selectedHerbivore.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
