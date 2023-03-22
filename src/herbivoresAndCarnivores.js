'use strict';

class Animal {
  constructor(
    name,
    health = 100,
  ) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(
    health,
    name,
    hidden = false,
  ) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    Animal.alive = Animal.alive.filter(animal => {
      if (animal instanceof Herbivore && animal.health === 0) {
        return false;
      }

      return true;
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
