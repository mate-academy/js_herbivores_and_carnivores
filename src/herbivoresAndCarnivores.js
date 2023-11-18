'use strict';

class Animal {
  health = 100;

  constructor(name) {
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  ATTACK_DAMAGE = 50;

  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(animal) {
    if (!animal.hidden && animal instanceof Herbivore) {
      animal.health -= this.ATTACK_DAMAGE;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(
        (currentAnimal) => currentAnimal !== animal
      );
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
