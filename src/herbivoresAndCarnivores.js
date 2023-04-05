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
  constructor(name, health,) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore
      && animal.hidden === false
      && animal.health > 0) {
      animal.health -= 50;

      if (!animal.health) {
        Animal.alive = Animal.alive.filter((creature) => (
          creature.name !== animal.name
        ));
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
