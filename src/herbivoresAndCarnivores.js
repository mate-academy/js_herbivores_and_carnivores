'use strict';

class Animal {
  static alive = [];
  static START_HEALTH = 100;

  health = Animal.START_HEALTH;

  constructor(name) {
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static BITE_DAMAGE = 50;

  bite(animalToBite) {
    if (animalToBite instanceof Carnivore || animalToBite.hidden) {
      return;
    }

    animalToBite.health -= Carnivore.BITE_DAMAGE;

    if (animalToBite.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== animalToBite);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
