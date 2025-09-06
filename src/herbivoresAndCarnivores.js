'use strict';

class Animal {
  static alive = [];

  constructor(name = 'Animal', health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }

  die() {
    this.health = 0;
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }

  changeHealth(amount) {
    this.health += amount;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.changeHealth(-50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
