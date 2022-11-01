'use strict';

class Animal {
  // write your code here
  // static alive = [];

  constructor() {
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor() {
    super();
    this.hidden = false;

    Animal.alive.push(this);
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  // write your code here
  constructor() {
    super();

    Animal.alive.push(this);
  };

  bite(name) {
    if (name.hidden === false
      && name instanceof Herbivore
      && name.health > 0) {
      name.health -= 50;
    }

    if (name.health === 0) {
      const dead = Animal.alive.indexOf(name);

      Animal.alive.splice(dead, 1);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
