'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  remove() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
  isAlive() {
    return this.health > 0;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && !target.hidden && target.isAlive()) {
      target.health -= 50;

      if (target.health <= 0) {
        target.remove();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
