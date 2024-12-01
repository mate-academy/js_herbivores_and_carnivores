'use strict';

class Animal {
  static alive = [];
  static INITIAL_HEALTH = 100;
  static ZERO_HEALTH = 0;

  constructor(name) {
    this.name = name;
    this.health = Animal.INITIAL_HEALTH;
    Animal.alive.push(this);
  }

  static die() {
    Animal.alive = Animal.alive.filter(
      (animal) => animal.health > Animal.ZERO_HEALTH,
    );
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= Carnivore.BITE_DAMAGE;

      if (animal.health <= Animal.ZERO_HEALTH) {
        Animal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
