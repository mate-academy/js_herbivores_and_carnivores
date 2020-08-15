'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }

  constructor(name) {
    super(name);
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (!target.hidden && target instanceof Herbivore) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(target), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
