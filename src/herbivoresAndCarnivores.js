'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

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
  bite(harbivore) {
    if (harbivore instanceof Herbivore && !harbivore.hidden) {
      harbivore.health -= 50;
    }

    if (harbivore.health <= 0 && Animal.alive.includes(harbivore)) {
      Animal.alive.splice(Animal.alive.indexOf(harbivore), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
