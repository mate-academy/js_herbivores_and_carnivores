'use strict';

class Animal {
  static dead(obj) {
    Animal.alive.splice(Animal.alive.indexOf(obj), 1);
  };

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (Animal.alive === undefined) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden || animal instanceof Carnivore) {
      return;
    }
    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.dead(animal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
