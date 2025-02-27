'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100, hidden) {
    this.health = health || 100;
    this.name = name;
    this.hidden = hidden;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(animal) {
    if (
      Animal.alive.includes(animal) &&
      animal instanceof Herbivore &&
      !animal.hidden
    ) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((al) => al !== animal);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
