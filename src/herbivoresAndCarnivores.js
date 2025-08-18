'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    // Usar filter para manter apenas os animais com saúde maior que 0
    // eslint-disable-next-line prettier/prettier
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
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
    // Verifica apenas se o alvo é um Herbivore e não está escondido
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // Se a saúde for menor ou igual a 0, o alvo morre
      if (target.health <= 0) {
        target.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
