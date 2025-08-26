'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;

    // Adiciona à lista de vivos
    Animal.alive.push(this);
  }

  // Remove o animal da lista de vivos quando morre
  die() {
    Animal.alive = Animal.alive.filter(a => a !== this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    // Só funciona se o alvo for Herbivore e não estiver escondido
    if (!(target instanceof Herbivore)) return;
    if (target.hidden) return;

    target.health -= 50;

    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};