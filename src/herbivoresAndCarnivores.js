'use strict';
class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this._health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  get health() {
    return this._health;
  }

  set health(newHealth) {
    this._health = newHealth;

    if (this._health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
  }
}
class Herbivore extends Animal {
  constructor(health = 100, name, hidden) {
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

  bite(herbivore) {
    if (herbivore.hidden === true || herbivore instanceof Carnivore) {
      return herbivore.name;
    }

    herbivore.health -= 50;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
