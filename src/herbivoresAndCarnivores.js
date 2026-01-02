'use strict';

class Animal {
  static alive = [];
  static MAX_HEALTH = 100;
  static BITE_DAMAGE = 50;
  static DEATH_THRESHOLD = 0;

  constructor(name) {
    this.health = Animal.MAX_HEALTH;
    this.name = name;

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
  bite(target) {
    if (target.hidden === true) {
      return;
    }

    if (target instanceof Carnivore) {
      return;
    }

    target.health -= Animal.BITE_DAMAGE;

    Animal.alive = Animal.alive.filter(
      (animal) => animal.health > Animal.DEATH_THRESHOLD,
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
