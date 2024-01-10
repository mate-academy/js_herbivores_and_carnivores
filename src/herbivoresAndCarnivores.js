'use strict';

const FULL_HP = 100;
const DAMAGE = 50;
const DEATH_HP = 0;

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = FULL_HP;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DAMAGE;
    }

    if (animal.health <= DEATH_HP) {
      Animal.alive = Animal.alive.filter(
        currentAnimal => currentAnimal !== animal
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
