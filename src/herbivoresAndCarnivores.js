'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this); // add instance to alive array
    }
  }
}

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
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      // remove prey from alive array if health is 0 or less
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
