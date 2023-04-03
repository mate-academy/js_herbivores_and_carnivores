'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivoreObject) {
    const isItHerbivore = herbivoreObject instanceof Herbivore;

    herbivoreObject.health = herbivoreObject.hidden === false
    && isItHerbivore
      ? herbivoreObject.health -= 50
      : herbivoreObject.health;

    if (herbivoreObject.health === 0) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
