'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static updateAlive() {
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
  bite(target) {
    const isHerbivore = target instanceof Herbivore;
    const isNotHidden = target && !target.hidden;

    if (isHerbivore && isNotHidden) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.updateAlive();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
