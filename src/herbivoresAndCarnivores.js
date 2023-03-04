'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }

  set health(value) {
    if (value >= 0) {
      this._health = value;
    } else {
      this._health = 0;
    }
  }

  get health() {
    return this._health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    const preyIndex = Animal.alive.findIndex(animal => animal === prey);

    if (
      !(prey instanceof Carnivore)
      && preyIndex !== -1
      && !prey.hidden
    ) {
      prey.health -= 50;

      if (prey.health <= 0) {
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
