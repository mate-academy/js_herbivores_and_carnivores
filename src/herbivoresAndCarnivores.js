'use strict';

class Animal {
  static alive = [].sort((b, a) => b.health - a.health);
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health === 0) {
      Animal.alive.pop();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
