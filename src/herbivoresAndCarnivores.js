'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if ((herbivore instanceof Herbivore) && (!herbivore.hidden)) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
