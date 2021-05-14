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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if ((prey instanceof Herbivore) && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      const preyIndx = Animal.alive.findIndex(animal => {
        return Object.is(animal, prey);
      });

      Animal.alive.splice(preyIndx, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
