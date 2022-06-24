'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {

  bite(animal) {
    const isNotHiddenHerbivore = animal instanceof Herbivore && !animal.hidden;
    const damage = 50;

    if (isNotHiddenHerbivore) {
      animal.health -= damage;
    }

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health);
    }
  }
}
Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
