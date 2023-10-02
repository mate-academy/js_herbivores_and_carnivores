'use strict';

class Animal {
  constructor(name, hidden) {
    this.name = name;
    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(animal), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
