'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }

  dano(valor) {
    this.health = this.health - valor;
    Animal.alive = Animal.alive.filter((a) => a !== this);
  }
}

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
  bite(presa) {
    if (presa instanceof Herbivore && !presa.hidden) {
      presa.dano(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
