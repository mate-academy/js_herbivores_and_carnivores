'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static alive = [];

  die() {
    Animal.alive = Animal.alive.filter((an) => an.health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;

      prey.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
