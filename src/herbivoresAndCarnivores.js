'use strict';

class Animal {
  // write your code here
  static alive = [];
  health = 100;
  hidden = false;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(victim) {
    if (victim instanceof Carnivore || victim.hidden || victim.health <= 0) {
      return;
    }

    victim.health -= 50;

    Animal.alive = Animal.alive.filter((elem) => {
      return elem.health !== 0;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
