'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;
    const isHidden = !animal.hidden;

    if (isHerbivore && isHidden) {
      animal.health -= 50;
    }

    const isDead = animal.health <= 0;

    if (isDead) {
      Animal.alive = Animal.alive.filter(creature => creature.health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
