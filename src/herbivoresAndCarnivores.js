'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (!Animal.alive) {
      Animal.alive = [];
    }

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if ((animal instanceof Herbivore)
      && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = [...Animal.alive.filter(x => x.health > 0)];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
