'use strict';

class Animal {
  #DEFAULT_HEALTH = 100;
  static alive = [];

  constructor(name, health) {
    this.health = health ?? this.#DEFAULT_HEALTH;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  #DEFAULT_DAMAGE = 50;

  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= this.#DEFAULT_DAMAGE;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
