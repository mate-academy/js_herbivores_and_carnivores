'use strict';

// Animal class - represents the general characteristics of all animals
class Animal {
  constructor(name) {
    // The name property is the name of the animal
    this.name = name;
    // The health property is the animal's health, the default is 100
    this.health = 100;
    // Adds the current Animal object to the alive array,
    // which displays all living animals
    Animal.alive.push(this);
  }
}

// Static array alive - stores all living animals,
//  is common to all instances of the Animal class
Animal.alive = [];

// The Herbivore class represents a herbivore animals
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    // Property hidden - indicates whether the herbivore
    // is hidden (default - false)
    this.hidden = false;
  }

  // The hide method hides the animal by changing the hidden property to true
  hide() {
    this.hidden = true;
  }

  // checkHealth method - checks the health of the herbivore
  // and removes it from the alive array if health <= 0
  checkHealth() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

// Class Carnivore - represents a predatory animal
class Carnivore extends Animal {
  // The bite method is called before an attack on a herbivore animal
  bite(target) {
    // Checking if the animal is a herbivore and if it is hidden
    if (target instanceof Herbivore && !target.hidden) {
      // Reduces the herbivore's health by 50
      target.health -= 50;
      // Calls the checkHealth method to check the herbivore's health
      // after an attack
      target.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
