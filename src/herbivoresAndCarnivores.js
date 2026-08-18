'use strict';

class Animal {
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  static alive = [];
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore) {
      if (!prey.hidden) {
        prey.health -= 50;

        if (prey.health < 1) {
          Animal.alive = Animal.alive.filter(
            (currentAnimal) => currentAnimal !== prey,
          );
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
