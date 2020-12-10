'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.health = 100;
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.health = 100;

    Animal.alive.push(this);
  }

  bite(obj) {
    if (obj instanceof Herbivore === true && !obj.hidden) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      const index = Animal.alive.findIndex(elem => elem.health === 0);

      delete Animal.alive[index];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
