'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  checkDeath() {
    if (!this.isAlive()) {
      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}
class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      herbivore.checkDeath();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
