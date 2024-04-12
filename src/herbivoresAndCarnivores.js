'use strict';

class Animal {
  static aliveAnimals = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.aliveAnimals.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(currentAnimal) {
    if (!currentAnimal.hidden && currentAnimal instanceof Herbivore) {
      currentAnimal.health -= 50;
    }

    Animal.aliveAnimals = Animal.aliveAnimals.filter(
      (notDeadAnimal) => notDeadAnimal.health > 0,
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
