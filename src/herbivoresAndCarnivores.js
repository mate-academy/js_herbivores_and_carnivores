'use strict';

class Animal {
  static alive = [];
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
