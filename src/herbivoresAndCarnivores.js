'use strict';

class Animal {
  static alive = [];

  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
  }

  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    } else if (prey instanceof Carnivore) {
      return;
    }

    if (prey.health <= 0) {
      const preyIndex = Animal.alive.indexOf(prey);

      if (preyIndex > -1) {
        Animal.alive.splice(preyIndex, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
