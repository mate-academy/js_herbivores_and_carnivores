class Animal {
  static alive = []; // Static array to store alive animals

  constructor(name) {
    this.name = name;
    this.health = 100; // Default health
    Animal.alive.push(this); // Add the new animal to the alive array
  }

  // Method to check if the animal is alive
  isAlive() {
    return this.health > 0;
  }

  // Method to remove dead animals from the alive array
  static removeDead() {
    Animal.alive = Animal.alive.filter((animal) => animal.isAlive());
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false; // Herbivores can hide
  }

  // Method to hide the herbivore
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // Method to bite a herbivore
  bite(target) {
    // Check if the target is a herbivore and not hidden
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50; // Decrease health by 50

      // Remove dead animals from the alive array
      Animal.removeDead();
    }
  }
}

// Create instances of Herbivore and Carnivore
const herbivore = new Herbivore('Deer');
const carnivore = new Carnivore('Lion');

// Carnivore bites the herbivore
carnivore.bite(herbivore);

// Log the health of the herbivore
// eslint-disable-next-line no-console
console.log(`${herbivore.name} health: ${herbivore.health}`);
