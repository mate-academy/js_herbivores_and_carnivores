'use strict';

class Animal {
  static alive = []; // Static array to store all alive animals

  constructor(name) {
    this.name = name;
    this.health = 100; // Default health value
    Animal.alive.push(this); // Add the animal to the alive array upon creation
  }

  // Method to remove the animal from alive array if its health is <= 0
  die() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;

      if (prey.health <= 0) {
        prey.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
