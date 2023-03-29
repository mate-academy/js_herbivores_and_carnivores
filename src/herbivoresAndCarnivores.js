'use strict';

class Animal {
  // static alive = [];

  static controlPopulation(creature) {
    this.alive.push(creature);
  }

  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.controlPopulation(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

    Animal.alive = Animal.alive.filter(({ health }) => health !== 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
