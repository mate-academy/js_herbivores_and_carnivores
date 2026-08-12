'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this._health = health;
    this.isalive = true;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;

    if (this._health <= 0) {
      this.isalive = false;
      Animal.alive = Animal.alive.filter((animal) => animal.isalive);
    }
  }
  getHeart(value) {
    this.health -= value;
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
