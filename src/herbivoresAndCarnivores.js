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

      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

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
    const isHerbivore = target instanceof Herbivore;
    const isNotHidden = target && !target.hidden;

    if (isHerbivore && isNotHidden) {
      target.health -= 50;
      target._checkHealth();
    }
  }
}

// Exportação compatível com o ambiente de testes
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = { Animal, Herbivore, Carnivore };
}
