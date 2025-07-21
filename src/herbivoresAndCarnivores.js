'use strict';

class Animal {
  // write your code here
  health = 100;
  static alive = [];

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

  bite(herb) {
    if (herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const kill = Animal.alive.indexOf(herb);

      delete Animal.alive[kill];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
