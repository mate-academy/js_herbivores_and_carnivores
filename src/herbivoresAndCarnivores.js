'use strict';

class Animal {
  static alive = [];
  name;
  health;
  constructor(name) {
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden;
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    herbivore.health -= 50;

    if (herbivore.health <= 0) {
      const filteredAnimals = Animal.alive.filter(
        (animal) => animal.name !== herbivore.name);

      Animal.alive = filteredAnimals;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
