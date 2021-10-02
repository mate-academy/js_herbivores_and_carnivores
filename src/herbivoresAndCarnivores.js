'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (
      !(prey instanceof Carnivore)
      && !prey.hidden
    ) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive.splice(
          Animal.alive.findIndex(
            creature => creature === prey
          ),
          1
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
