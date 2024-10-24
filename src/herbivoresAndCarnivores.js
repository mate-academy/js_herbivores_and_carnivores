'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100; // Ensure health is set to 100
    this.hidden = false; // Initialize hidden to false
    Animal.alive.push(this); // Add this instance to the alive array
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = !this.hidden; // Invert the hidden property
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    // Ensure we can only bite herbivores and that they aren't hidden
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50; // Decrease health by 50

      if (herbivore.health <= 0) {
        herbivore.die(); // Remove from alive if health is 0 or less
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
