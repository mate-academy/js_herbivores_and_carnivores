'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;

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
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
