'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }
  takeDamage(damage) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
