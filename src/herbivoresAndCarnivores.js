'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  static checkHealthAndRemove(target) {
    if (target.health <= 0) {
      const deadToRemove = Animal.alive.indexOf(target);

      if (deadToRemove !== -1) {
        Animal.alive.splice(deadToRemove, 1);
      }
    }
  }
}
class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
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
      Animal.checkHealthAndRemove(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
