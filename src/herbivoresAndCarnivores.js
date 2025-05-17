'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // Add the newly created animal to the alive array
    Animal.alive.push(this);
  }

  // Static property to track all alive animals
  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
}

// Add hide method to Herbivore prototype to ensure it's inherited
Herbivore.prototype.hide = function () {
  this.hidden = true;
};

class Carnivore extends Animal {}

// Add bite method to Carnivore prototype to ensure it's inherited
Carnivore.prototype.bite = function (animal) {
  // Check if the animal is a herbivore (not a carnivore)
  if (!(animal instanceof Herbivore)) {
    return;
  }

  // Check if the herbivore is hidden
  if (animal.hidden) {
    return;
  }

  // Decrease the herbivore's health
  animal.health -= 50;

  // Check if the animal should die (health <= 0)
  if (animal.health <= 0) {
    // Use filter instead of indexOf + splice to avoid nested loop
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
