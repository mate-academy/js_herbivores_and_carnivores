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
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }
  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter((an) => an.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
