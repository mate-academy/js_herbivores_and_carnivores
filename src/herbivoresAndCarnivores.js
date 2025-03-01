'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  checkHealth() {
    if (this.health <= 0) {
      this.die();

      return `${this.name} has died`;
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (!(prey instanceof Herbivore)) {
      return `${this.name} can't bite another carnivore`;
    }

    if (prey.hidden) {
      return `${this.name} can't bite ${prey.name}, it's hidden`;
    }

    prey.health -= 50;

    const deathMessage = prey.checkHealth();

    return deathMessage || `${this.name} bite ${prey.name}`;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
