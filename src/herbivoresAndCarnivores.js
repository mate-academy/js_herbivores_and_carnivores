'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
  }
  static init(obj) {
    this.alive.push(obj);
  }
}
class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;

    Herbivore.init(this);
  }

  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {
  constructor(name) {
    super(name);

    Carnivore.init(this);
  }

  bite(animal) {
    const ZERO_HEALTH = 0;
    const HALF_HEALTH = 50;

    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= HALF_HEALTH;
    }

    if (animal.health === ZERO_HEALTH) {
      const index = Carnivore.alive.indexOf(animal);

      Carnivore.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
