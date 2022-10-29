'use strict';

class Animal {
  static addAnimal(animal) {
    if (!this.alive) {
      this.alive = [];
    }

    this.alive.push(animal);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAnimal(this);
  }
}

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
