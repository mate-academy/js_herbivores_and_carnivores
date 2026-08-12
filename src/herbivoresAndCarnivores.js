'use strict';

class Animal {
  static alive = [];
  static emptyslots = [];
  constructor(name, health = 100) {
    this.name = name;
    this._health = health;
    this.isalive = true;

    if (Animal.emptyslots.length === 0) {
      this.index = Animal.alive.push(this) - 1;
    } else {
      const index = Animal.emptyslots.pop();

      this.index = index;
      Animal.alive[index] = this;
    }
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      this.isalive = false;
      this.die();
    }
  }
  getHeart(value) {
    this.health -= value;
  }
  die() {
    Animal.alive[this.index] = null;
    Animal.emptyslots.push(this.index);
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
    if (animal instanceof Carnivore || animal.hidden) {
      return;
    }

    animal.getHeart(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
