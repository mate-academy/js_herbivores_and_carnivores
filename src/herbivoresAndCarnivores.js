'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    this.name = name;
    this.health = typeof health === 'number' ? health : 100;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        const index = Animal.alive.indexOf(animal);

        if (index > -1) {
          Animal.alive.splice(index, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
