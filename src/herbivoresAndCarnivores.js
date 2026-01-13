'use strict';

class Animal {
  static alive = [];

  constructor() {
    this.health = 100;
    this.name = '';
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    Animal.alive.push(this);
  }

  bite(object) {
    if (object instanceof Carnivore || object.hidden === true) {
      return;
    }
    object.health -= 50;

    if (object.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(object), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
