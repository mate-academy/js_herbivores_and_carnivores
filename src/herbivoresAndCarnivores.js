'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

  static alive = [];
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
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
