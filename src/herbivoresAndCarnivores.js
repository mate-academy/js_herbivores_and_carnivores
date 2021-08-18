'use strict';

class Animal {
  static alive = [];
  static healthChecker() {
    this.alive = this.alive.filter(anim => anim.health > 0);
  }

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature.hidden === false) {
      creature.health -= 50;

      if (creature.health === 0) {
        Animal.healthChecker();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
