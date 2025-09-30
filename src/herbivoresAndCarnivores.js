'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  checkHealthAndDie() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter(a => a.health > 0)
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
    if (target instanceof Herbivore && target.hidden !== true) {
      target.health -= 50;
      target.checkHealthAndDie();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
