'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden) {
    this.health = health;
    this.name = name;
    this.hidden = hidden;
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
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((x) => x.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
