'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (!(herbivoreAnimal instanceof Carnivore)
    && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;
    };

    if (herbivoreAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(diedAnimal => diedAnimal.health > 0);
    };
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
