'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  isAlive() {
    // if (this.health <= 0) {
    //   Animal.alive.splice(Animal.alive.findIndex(this), 1);
    // }
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hidden = false;
  constructor(name, health = 100) {
    super(...arguments);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(...arguments);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;
      herbivore.isAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
