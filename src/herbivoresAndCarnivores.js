'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    Animal.alive = Animal.alive.map(element => {
      if (element.name === this.name) {
        element.hidden = true;
        this.hidden = true;

        return element;
      }

      return element;
    });
  }
}

class Carnivore extends Animal {
  bite(canBite) {
    if (!(canBite instanceof Carnivore) && !canBite.hidden) {
      Animal.alive = Animal.alive.map(element => {
        if (element.name === canBite.name) {
          element.health = element.health - 50;

          return element;
        }

        return element;
      });

      Animal.alive = Animal.alive.filter(element => element.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
