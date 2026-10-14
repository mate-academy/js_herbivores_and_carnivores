'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(bitenAnimal, decreaseHealth = 50) {
    if (bitenAnimal instanceof Herbivore && bitenAnimal.hidden === false) {
      bitenAnimal.health -= decreaseHealth;

      if (bitenAnimal.health <= 0) {
        const removedAnimal = Animal.alive.filter(
          (animal) => animal !== bitenAnimal,
        );

        Animal.alive = removedAnimal;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
