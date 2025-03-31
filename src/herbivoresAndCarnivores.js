'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }

  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);

      return `${this.name} has died.`;
    }

    return `${this.name} is still alive.`;
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;

    return `${this.name} is hiding.`;
  }

  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);

      return `${this.name} has died and has been removed from the alive list.`;
    }

    return `${this.name} is still alive.`;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      herbivore.die();

      return `${this.name} bites ${herbivore.name}, reducing health to ${herbivore.health}. ${herbivore.die()}`;
    } else {
      return `${this.name} can't bite ${herbivore.name}. Either it's a carnivore or ${herbivore.name} is hiding.`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
