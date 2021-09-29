'use strict';

class Animal {
  static someoneDied() {
    const indexOfDeadAnimal = this.alive
      .findIndex(animal => animal.health <= 0);

    this.alive.splice(indexOfDeadAnimal, 1); // R.I.P.
  }

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
  bite(obj) {
    if (!(obj instanceof Carnivore) && obj.hidden === false) {
      obj.health -= 50;

      if (obj.health <= 0) {
        Animal.someoneDied();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
