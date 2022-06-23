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
    this.hidden ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(attackTo) {
    if (attackTo instanceof Herbivore & !attackTo.hidden) {
      attackTo.health -= 50;
    }

    if (!attackTo.health) {
      Animal.alive = Animal.alive.filter(isAlive => isAlive.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
