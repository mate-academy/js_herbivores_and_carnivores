'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivoreObject) {
    // eslint-disable-next-line
    const isItHerbivore = herbivoreObject instanceof Herbivore;

    herbivoreObject.health = herbivoreObject.hidden === false
    && isItHerbivore
      ? herbivoreObject.health -= 50
      : herbivoreObject.health;

    if (herbivoreObject.health === 0 && isItHerbivore) {
      Animal.alive = Animal.alive.filter(({ health }) => health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
