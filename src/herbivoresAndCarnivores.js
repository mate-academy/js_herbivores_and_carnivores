'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }

  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isHidden = !animal.hidden;

    animal.health = isHerbivore && isHidden
      ? animal.health - 50
      : animal.health;

    if (!animal.health) {
      Animal.alive.splice(Animal.alive.indexOf(animal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
