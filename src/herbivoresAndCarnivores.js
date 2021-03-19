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
  bite(attackedHerbivore) {
    if (attackedHerbivore.hidden === false) {
      attackedHerbivore.health -= 50;
    }

    if (attackedHerbivore.health === 0) {
      const indexDeadAnimal = Animal.alive.indexOf(attackedHerbivore);

      Animal.alive.splice(indexDeadAnimal, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
