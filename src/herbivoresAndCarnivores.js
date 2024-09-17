'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static removeFromAlive(animal) {
    Animal.alive = Animal.alive.filter((item) => item !== animal);
  }

  die() {
    Animal.removeFromAlive(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(attackedAnimal) {
    if (attackedAnimal instanceof Herbivore && !attackedAnimal.hidden) {
      attackedAnimal.health -= 50;
    }

    if (attackedAnimal.health === 0) {
      attackedAnimal.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
