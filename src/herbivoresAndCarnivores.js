'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this._health = 100;
    Animal.alive.push(this);
  }

  static die(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      Animal.die(this);
    }
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
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden) {
      return;
    }

    target.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
