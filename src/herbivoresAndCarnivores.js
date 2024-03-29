'use strict';

const BROKEN_HEALTH = 0;
const DEFAULT_HEALTH = 100;
const DEFAULT_DECREASE = 50;
//

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = DEFAULT_HEALTH;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
  }

  bite(object) {
    if (object instanceof Herbivore && !object.hidden) {
      object.health -= DEFAULT_DECREASE;

      Animal.alive = Animal.alive.filter((item) => item.health > BROKEN_HEALTH);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
