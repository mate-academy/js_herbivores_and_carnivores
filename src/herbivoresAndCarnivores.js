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
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;
    }

    if (herbivoreAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter(({ name: animalName }) => {
        return animalName !== herbivoreAnimal.name;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
