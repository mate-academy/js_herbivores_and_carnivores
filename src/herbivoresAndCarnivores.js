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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health <= 0) {
        const index = Animal.alive.findIndex(
          animal => animal === herbivoreAnimal
        );

        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
