'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.constructor.alive.push(this);
  }

  static getAlive() {
    return this.alive.filter((animal) => animal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (!prey.hidden && prey instanceof Herbivore) {
      prey.health -= 50;

      if (prey.health <= 0) {
        prey.healtth = 0;

        const index = Animal.alive.indexOf(prey);

        if (index > -1) {
          Animal.alive.splice(index, 1);
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
