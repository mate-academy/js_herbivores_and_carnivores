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
  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      const myIndex = Animal.alive.indexOf(obj);

      Animal.alive.splice(myIndex, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
