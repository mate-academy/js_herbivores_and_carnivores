'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(name, health);
  }

  bite(otherAnimal) {
    if (!(otherAnimal instanceof Herbivore)) {
      return;
    }

    if (otherAnimal.hidden) {
      return;
    }

    otherAnimal.health -= 50;

    if (otherAnimal.health <= 0) {
      Animal.alive = Animal.alive.filter((i) => i !== otherAnimal);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
