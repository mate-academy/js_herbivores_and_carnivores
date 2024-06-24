'use strict';

class Animal {
  static alive = [];
  static DEAD_VALUE = 0;
  static MAX_HEALTH = 100;
  static BITE_DAMAGE = 50;

  health = Animal.MAX_HEALTH;

  static removeDeadAnimals() {
    this.alive = this.alive.filter((item) => item.health > this.DEAD_VALUE);
  }

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
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
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.health -= Animal.BITE_DAMAGE;

    if (animal.health <= Animal.DEAD_VALUE) {
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
