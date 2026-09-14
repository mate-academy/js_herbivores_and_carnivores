'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  hidden = false;

  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey instanceof Carnivore || prey.hidden === true) {
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
