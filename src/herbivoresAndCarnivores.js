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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animalName) {
    if (!animalName.hidden && animalName instanceof Herbivore) {
      animalName.health -= 50;
    }

    if (animalName.health <= 0) {
      const index = Animal.alive.indexOf(animalName);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
