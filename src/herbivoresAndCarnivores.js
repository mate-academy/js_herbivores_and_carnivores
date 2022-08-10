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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(herbivoreObject) {
    if (!(herbivoreObject instanceof Herbivore)
        || herbivoreObject.hidden === true) {

    } else {
      herbivoreObject.health -= 50;
    }

    if (herbivoreObject.health <= 0) {
      Animal.alive = Animal.alive.filter(value => value.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
