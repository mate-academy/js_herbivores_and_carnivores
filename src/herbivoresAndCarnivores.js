'use strict';

class Animal {
  static alive = [];
  health = 100;
  name;

  constructor(name) {
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
  bite(target) {
    if (target instanceof Herbivore) {
      if (!target.hidden && Animal.alive.includes(target)) {
        target.health -= 50;

        if (target.health <= 0) {
          Animal.alive = Animal.alive.filter((item) => item !== target);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
