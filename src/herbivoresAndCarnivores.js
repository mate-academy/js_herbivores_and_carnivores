'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false; // default false for herbivores,
    // harmless for carnivores

    Animal.alive.push(this);
  }

  // Remove animal from alive if health <= 0
  checkHealth() {
    // Use filter to remove dead animals from alive array
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false; // explicitly set hidden for herbivore
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health < 0) {
        target.health = 0;
      }

      target.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
