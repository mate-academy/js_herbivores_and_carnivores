'use strict';
class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }

  checkHealth() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!(prey instanceof Herbivore)) {
      return;
    }

    if (prey.hidden) {
      return;
    }

    prey.health -= 50;
    prey.checkHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
