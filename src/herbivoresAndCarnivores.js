'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.Add(this);
  }
  static Add(animal) {
    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(animal);
  }

  static remove() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      Animal.remove();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
