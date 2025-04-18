'use strict';

class Animal {
  static alive = [];
  constructor(name, health) {
    this.name = name;
    this.health = health !== undefined ? health : 100;
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
    if (!(prey instanceof Herbivore) || prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
