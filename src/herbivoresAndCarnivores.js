'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

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
    const isHerbivore = prey instanceof Herbivore;

    if (!isHerbivore || prey.hidden) {
      return;
    }

    prey.health -= 50;

    if (prey.health === 0) {
      Animal.alive = Animal.alive.filter(animal => (
        animal.name !== prey.name
      ));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
