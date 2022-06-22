'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(animal) {
    if (!animal.hidden && !(animal instanceof Carnivore)) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive = Animal.alive.filter((filtAnimal) => {
          return filtAnimal !== animal;
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
