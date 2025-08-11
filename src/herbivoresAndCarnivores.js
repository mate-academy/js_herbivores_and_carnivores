'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;

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
    if (prey instanceof Herbivore && !prey.hidden) {
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
