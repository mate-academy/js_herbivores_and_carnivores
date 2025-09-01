'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this); // add instance to alive array
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
      // prey dies
      Animal.alive = Animal.alive.filter((animal) => animal !== prey);
      // remove from alive array
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
