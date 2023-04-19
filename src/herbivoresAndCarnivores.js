'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = []; // Linter czepia się użyciu static

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(target) {
    if (!target.hidden && 'hidden' in target) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((el) => el !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
