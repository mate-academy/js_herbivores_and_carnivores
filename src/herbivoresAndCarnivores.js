'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
  static removeDead() {
    Animal.alive = Animal.alive.reduce((acc, animal) => {
      if (animal.health > 0) {
        acc.push(animal);
      }

      return acc;
    }, []);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Carnivore || animal.hidden) {
      return 'The bite method does not work.';
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.removeDead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
