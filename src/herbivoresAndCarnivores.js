'use strict';

class Animal {
  constructor(animal, health = 100) {
    this.animal = animal;
    this.health = health;

    if (!Animal.aliveList) {
      Animal.aliveList = [];
    }
    Animal.aliveList.push(this);
  }

  static get alive() {
    return Animal.aliveList;
  }
}

class Herbivore extends Animal {
  constructor(animal, health = 100, hidden = false) {
    super(animal, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden !== true) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      const index = Animal.aliveList.indexOf(herb);

      if (index !== -1) {
        Animal.aliveList.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
