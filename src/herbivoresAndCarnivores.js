'use strict';

class Animal {
  /**
  static createAliveAnimalList() {
    const alive = [];
    const emptyslots = [];

    const list = alive;

    list.add = (animal) => {
      if (emptyslots.length === 0) {
        animal.index = alive.push(animal) - 1;
      } else {
        const index = emptyslots.pop();

        animal.index = index;
        alive[index] = animal;
      }
    };

    list.remove = (animal) => {
      alive[animal.index] = null;
      emptyslots.push(animal.index);
    };

    return list;
  }

  static alive = Animal.createAliveAnimalList();
*/

  static alive = [];
  static #emptyslots = [];

  constructor(name, health = 100) {
    this.name = name;
    this._health = health;
    this.addToAlive();
  }

  addToAlive() {
    if (Animal.#emptyslots.length > 0) {
      this.index = Animal.#emptyslots.pop();
      Animal.alive[this.index] = this;

      return;
    }

    this.index = Animal.alive.length;
    Animal.alive.push(this);
  }
  get health() {
    return this._health;
  }
  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      this.die();
    }
  }
  takeDamage(value) {
    this.health -= value;
  }
  die() {
    Animal.alive[this.index] = null;
    Animal.#emptyslots.push(this.index);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (!(animal instanceof Herbivore) || animal.hidden) {
      return;
    }

    animal.takeDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
