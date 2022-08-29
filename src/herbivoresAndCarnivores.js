'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Carnivore) && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== prey);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
