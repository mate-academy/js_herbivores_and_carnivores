class Animal {
  static alive = []; // Static array to keep track of all alive animals

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Add the animal to the alive array
    Animal.alive.push(this);
  }

  // Helper method to remove the animal from the alive array when it dies
  die() {
    Animal.alive = Animal.alive.filter(animal => animal !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false; // Default state: not hidden
  }

  // Method to hide from carnivores
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
  }

  // Method to bite another animal
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // If health drops to 0 or below, the target dies
      if (target.health <= 0) {
        target.die();
      }
    }
  }
}
