'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;


    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor () {
    super()
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;
    }

    Animal.alive.forEach((classObj, index, arr) => {
      if (classObj instanceof Herbivore && classObj.health <= 0) {
        arr.splice(index, 1);
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
