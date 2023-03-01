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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Herbivore)
      || prey.hidden
    ) {
      return;
    }

    prey.health -= 50;

    Animal.alive = Animal.alive.filter(
      ({ health }) => health > 0
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
