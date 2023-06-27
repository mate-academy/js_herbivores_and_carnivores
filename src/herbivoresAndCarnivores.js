'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  bite(animal) {
    const DAMAGE_OF_BITE = 50;
    const isHerbivore = (animal instanceof Herbivore);
    const isEnoughHealth = (animal.health >= DAMAGE_OF_BITE);
    const isVisible = (animal.hidden === false);

    if (isHerbivore && isVisible && isEnoughHealth) {
      animal.health -= DAMAGE_OF_BITE;
    }

    if (animal.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
