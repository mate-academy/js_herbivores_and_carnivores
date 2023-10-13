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
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(obj) {
    if (obj instanceof Carnivore) {
      return;
    }

    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;
    }

    const i = Animal.alive.findIndex(beast => !beast.health);

    if (i !== -1) {
      Animal.alive.splice(i, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
