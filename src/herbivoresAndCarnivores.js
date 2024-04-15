'use strict';

class Animal {
  // write your code here
  static alive = [];
  static biteDamage = 50;

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static filterOutDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health, name, hidden = false) {
    super(health, name);

    this.hidden = hidden;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(animalObject) {
    if (animalObject instanceof Herbivore && !animalObject.hidden) {
      animalObject.health -= Animal.biteDamage;
    }

    if (animalObject.health <= 0) {
      Animal.filterOutDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
