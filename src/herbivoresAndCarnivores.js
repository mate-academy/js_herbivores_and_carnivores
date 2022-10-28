'use strict';

class Animal {
  static alive = [];

  constructor(health, name) {
    this.health = health;
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name, hidden) {
    super(health, name, hidden);
    this.hidden = hidden;
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name, hidden) {
    super(...arguments);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }
    Animal.alive = Animal.alive.filter(el => (el.health > 0));
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
