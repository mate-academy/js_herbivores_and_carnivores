'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    this.pushAlive();
  }

  pushAlive() {
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(whom) {
    const isHerbivore = whom instanceof Herbivore;

    if (isHerbivore && !whom.hidden) {
      whom.health -= 50;

      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
