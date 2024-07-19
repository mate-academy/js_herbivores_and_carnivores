'use strict';

class Animal {
  static alive = [];
  static INITIAL_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Animal.INITIAL_HEALTH;
    Animal.alive.push(this);
  }

  static cleanUp() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
  static BITE_DAMAGE = 50;

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden && animal.health > 0) {
      animal.health -= Carnivore.BITE_DAMAGE;

      if (animal.health <= 0) {
        Animal.cleanUp();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
