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
    super(...arguments);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(anybody) {
    if (anybody instanceof Herbivore && !anybody.hidden) {
      anybody.health -= 50;

      if (anybody.health <= 0) {
        const positionAlive = Animal.alive.indexOf(anybody);

        Animal.alive.splice(positionAlive, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
