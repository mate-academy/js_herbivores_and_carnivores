'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (!target.hidden) {
      if (!(target instanceof Carnivore)) {
        target.health -= 50;
      }

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
