'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  _checkHealth() {
    if (this.health <= 0) {
      this.health = 0;
      // Requisito #1: Usar filter para reatribuir o array Animal.alive
      Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    // Requisito #2: Apenas definir como true, sem alternar
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    const isHerbivore = target instanceof Herbivore;
    const isNotHidden = target && !target.hidden;

    if (isHerbivore && isNotHidden) {
      target.health -= 50;
      target._checkHealth();
    }
  }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { Animal, Herbivore, Carnivore };
}
