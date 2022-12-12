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
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.alive = Animal.alive.filter(an => an.health > 0);
  }
}

const herbivore = new Herbivore();
const carnivore = new Carnivore();

Animal.alive.push(herbivore, carnivore);

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
