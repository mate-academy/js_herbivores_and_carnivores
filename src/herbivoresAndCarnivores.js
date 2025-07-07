'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((a) => a !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(100, name);
  }
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(100, name);
  }

  bite(herbivoreAnimal) {
    if (herbivoreAnimal instanceof Herbivore && !herbivoreAnimal.hidden) {
      herbivoreAnimal.health -= 50;

      if (herbivoreAnimal.health <= 0) {
        herbivoreAnimal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
