'use strict';

const DEFAULT_HEALTH = 100;
const DECREASE_THE_LIFE = 50;
const ANIMAL_LIFE_DEATH = 0;

class Animal {
  constructor(name, health = DEFAULT_HEALTH) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [];
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
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= DECREASE_THE_LIFE;
    }

    Animal.alive = Animal.alive.filter(
      (aliveAnimal) => aliveAnimal.health > ANIMAL_LIFE_DEATH,
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
