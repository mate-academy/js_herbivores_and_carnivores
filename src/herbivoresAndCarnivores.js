'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden; // or true
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= 50;

      Animal.alive = Animal.alive.filter((aliveAnimal) =>
        aliveAnimal.health > 0);
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};

// for (let i = 0; i < Animal.alive.length; i++) {
//   if (Animal.alive[i].health === 0) {
//     Animal.alive.splice(i, 1);
