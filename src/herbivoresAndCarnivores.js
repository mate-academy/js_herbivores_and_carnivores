'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];
Animal.animalTimeToDie = 0;

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
  constructor(name) {
    super(name);

    this.damage = 50;
  }

  bite(herb) {
    if ((herb instanceof Carnivore) || herb.hidden) {
      return;
    }

    herb.health -= this.damage;

    if (herb.health === Animal.animalTimeToDie) {
      const animalToDieIdx = Animal.alive.findIndex(animal => {
        return herb === animal;
      });

      Animal.alive.splice(animalToDieIdx, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
