'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, healt) {
    super(name, healt);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

if (Herbivore.health <= 0) {
  Animal.alive = Animal.alive.filter(animal => animal.health > 0);
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore.hidden === false) {
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
