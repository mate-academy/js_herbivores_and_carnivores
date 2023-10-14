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
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;
    }

    const dead = Animal.alive.findIndex(beast => !beast.health);

    if (dead !== -1) {
      Animal.alive.splice(dead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
