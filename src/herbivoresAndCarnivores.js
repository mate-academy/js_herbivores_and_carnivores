'use strict';

class Animal {
  constructor(name, health = 100,) {
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
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;
    }

    // if (herb.health === 0) {
    //   Animal.alive.splice(Animal.alive.health);
    // }

    Animal.alive = Animal.alive.filter((animalHealth) =>
      animalHealth.health > 0);
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
