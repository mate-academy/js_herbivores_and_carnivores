'use strict';

class Animal {
  static alive = [];

  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      Animal.alive = Animal.alive.filter(x => x.health > 0);

      // if (herbivore.health <= 0) {
      //   Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
      // }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
