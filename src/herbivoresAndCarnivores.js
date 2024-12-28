'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Add the animal instance to the alive array
    Animal.alive.push(this);
  }

  // Utility method to remove dead animals from the alive list
  static removeDeadAnimals() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  // Hide the herbivore
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // Bite a herbivore
  bite(target) {
    if (
      target instanceof Herbivore && // Can only bite herbivores
      !target.hidden && // Herbivore must not be hidden
      target.health > 0 // Herbivore must be alive
    ) {
      target.health -= 50;

      // Remove the target from the alive array if it dies
      Animal.removeDeadAnimals();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
