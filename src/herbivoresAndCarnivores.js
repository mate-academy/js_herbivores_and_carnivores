'use strict';

class Animal {
  constructor(name) {
    // Constructor for the Animal class.
    this.name = name; // Initialize the name property.
    this.health = 100; // Initialize the health property to 100.
    this.hidden = false; // Initialize the hidden property to false.
    Animal.addToAlive(this); // Add this animal instance to the "alive" array.
  }

  static addToAlive(animal) {
    // A static method to add an animal to the "alive" array.
    if (!Animal.alive) {
      Animal.alive = []; // If "alive" array doesn't exist, create it.
    }
    Animal.alive.push(animal); // Add the animal to the "alive" array.
  }

  static removeDeadAnimals() {
    // A static method to remove dead animals from the "alive" array.
    if (!Animal.alive) {
      Animal.alive = []; // If "alive" array
      // doesn't exist, create it.
    }
    // Filter out dead animals.
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    // A method for Herbivore to toggle the "hidden" property.
    this.hidden = !this.hidden; // Invert the value of the "hidden" property.
  }
}

class Carnivore extends Animal {
  bite(target) {
    // A method for Carnivore to attack another animal.
    if (target instanceof Carnivore || target.hidden) {
      // Check if the target is a Carnivore or hidden.
      return `${this.name} can't bite ${target.name}`; // Return
      // a message indicating the unsuccessful attack.
    }

    target.health -= 50; // Decrease the target's health by 50.

    if (target.health <= 0) {
      // Check if the target's health has reached or fallen below 0.
      Animal.removeDeadAnimals(); // Remove dead animals from the "alive" array.

      return `${target.name} has been killed by ${this.name}`;
      // message indicating the successful attack and death of the target.
    }

    return `${this.name} bites ${target.name}`;
    // message indicating the successful attack.
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
