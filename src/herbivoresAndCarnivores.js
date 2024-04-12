'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
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

    Animal.alive = Animal.alive.filter(
      (notDeadAnimal) => notDeadAnimal.health > 0,
    );
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
