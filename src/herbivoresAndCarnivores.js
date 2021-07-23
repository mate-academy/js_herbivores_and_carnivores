'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (!herb.hidden && herb instanceof Herbivore) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const herbIndex = Animal.alive.findIndex(animal => animal === herb);

      Animal.alive.splice(herbIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
