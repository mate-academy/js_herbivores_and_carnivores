'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  deleteAnimal(animal) {
    Animal.alive = Animal.alive.filter((item) => item !== animal);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  setBite() {
    if (this.hidden === false) {
      this.health -= 50;
    }

    if (this.health === 0) {
      this.deleteAnimal(this);
    }
  }

  bite(animal) {
    this.setBite.call(animal);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
