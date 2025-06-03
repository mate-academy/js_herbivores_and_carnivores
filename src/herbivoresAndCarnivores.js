'use strict';

class Animal {
  health = 100;
  static alive = [];
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
  die() {
    Animal.alive = Animal.alive.filter((target) => target.health > 0);
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
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        target.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
