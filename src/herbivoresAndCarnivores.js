'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(biteAnimal) {
    const animalIsHerbivore = biteAnimal instanceof Herbivore;
    const noHidden = biteAnimal.hidden === false;

    if (animalIsHerbivore && noHidden) {
      biteAnimal.health -= 50;
    }

    if (biteAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((value) => value.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
