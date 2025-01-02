'use strict';

class Animal {
  health = 100;

  static alive = [];

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

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
