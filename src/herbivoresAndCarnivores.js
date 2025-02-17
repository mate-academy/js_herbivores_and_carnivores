'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

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
    const currentAnimal = animal;

    if (!currentAnimal || currentAnimal.health <= 0) {
      return;
    }

    if (currentAnimal instanceof Herbivore && !currentAnimal.hidden) {
      currentAnimal.health -= 50;

      if (currentAnimal.health <= 0) {
        currentAnimal.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
