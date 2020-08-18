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
    this.hidden === false ? this.hidden = true : this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(object) {
    if (object.hidden === false && object instanceof Herbivore) {
      object.health -= 50;
    }

    if (object.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(object), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
