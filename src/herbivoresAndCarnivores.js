'use strict';

class Animal {
  health = 100;

  static alive = [];
  static addToAlive(obj) {
    this.alive.push(obj);
  }

  static deleteDead() {
    const index = this.alive.findIndex(animal => animal.health === 0);

    this.alive.splice(index, 1);
  }

  constructor(name) {
    this.name = name;

    Animal.addToAlive(this);
  }
}

class Herbivore extends Animal {
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && (animal instanceof Herbivore)) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.deleteDead(animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
