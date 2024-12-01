'use strict';

class Animal {
  static alive = [];
  static DEFAULT_HEALTH = 100;

  constructor(name, health = Animal.DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = Animal.DEFAULT_HEALTH) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  static BITE_DAMAGE = 50;
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= Carnivore.BITE_DAMAGE;

      if (herbivore.health <= 0) {
        herbivore.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
