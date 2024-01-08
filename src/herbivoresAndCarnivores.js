'use strict';

class Animal {
  constructor() {
    this.health = 100;

  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;

    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();

    Animal.alive.push(this);
    this.name = name;
  }

  bite(obj) {
    if (obj.hidden === false) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      const index = Animal.alive.indexOf(obj);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
