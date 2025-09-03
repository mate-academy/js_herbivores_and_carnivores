'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!prey.hidden && prey instanceof Herbivore) {
      prey.health -= 50;

      if (prey.health <= 0) {
        Animal.alive = Animal.alive.filter((item) => item.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
