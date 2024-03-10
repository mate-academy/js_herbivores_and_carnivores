'use strict';

class Animal {
  constructor(name, health = 100, hidden) {
    this.health = health;
    this.name = name;
    this.hidden = hidden || false;
    Animal.alive.push(this);
  }

  static findAnimalByName(name) {
    return Animal.alive.find(animal => animal.name === name.name);
  }
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health, hidden);
    this.hidden = hidden || false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

Animal.alive = [];

class Carnivore extends Animal {
  constructor(name, health, hidden, carnivore = true) {
    super(name, health, hidden);
    this.carnivore = carnivore;
    Animal.alive.push(this);
  }

  bite(nameAnimal) {
    if (!nameAnimal.hidden && !nameAnimal.carnivore) {
      nameAnimal.health -= 50;
    }
    Animal.removeDeadAnimals();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
