'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        prey.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
