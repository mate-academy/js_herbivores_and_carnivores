'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health);
    this.hidden = hidden ?? false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animalBitten) {
    const damage = 50;

    if (animalBitten instanceof Herbivore && !animalBitten.hidden) {
      animalBitten.health -= damage;

      if (animalBitten.health <= 0) {
        Animal.alive = Animal.alive.filter((a) => a !== animalBitten);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
