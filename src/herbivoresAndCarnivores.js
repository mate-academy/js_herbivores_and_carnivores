'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animal) {
    const isHerbivore = animal instanceof Herbivore;

    if (!isHerbivore || animal.hidden) {
      return;
    }

    animal.health -= 50;

    if (animal.health <= 0) {
      Animal.alive = Animal.alive.filter(
        notDead => notDead.name !== animal.name
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
