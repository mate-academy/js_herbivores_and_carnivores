'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    // If the instance is a Herbivore, initialize hidden
    if (this instanceof Herbivore) {
      this.hidden = false;
    }

    Animal.alive.push(this);
  }

  checkAlive() {
    // Filter out dead animals
    Animal.alive = Animal.alive.filter(animal => animal.health > 0);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Herbivore)) return; // can't bite other carnivores
    if (prey.hidden) return; // can't bite hiding herbivore

    prey.health -= 50;
    prey.checkAlive(); // update alive array
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
