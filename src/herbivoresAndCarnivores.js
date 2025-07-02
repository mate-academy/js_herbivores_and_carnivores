'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;
  name;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden;

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
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (target instanceof Carnivore || target.hidden === true) {
      return;
    }

    target.health = target.health - 50;

    if (target.health === 0) {
      const indexDead = Animal.alive.indexOf(target);

      delete Animal.alive[indexDead];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
