'use strict';

class Animal {
  static alive = [];
  static DEFAULT_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = Animal.DEFAULT_HEALTH;

    Animal.alive.push(this);
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

  bite(weakerAnimal) {
    if (
      weakerAnimal.hidden === false ||
      weakerAnimal.health < Animal.DEFAULT_HEALTH
    ) {
      weakerAnimal.health -= Carnivore.BITE_DAMAGE;
    }

    if (weakerAnimal.hidden === false) {
      delete weakerAnimal.hidden;
    }

    if (weakerAnimal.health === 0) {
      Animal.alive = Animal.alive.filter((alive) => alive.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
