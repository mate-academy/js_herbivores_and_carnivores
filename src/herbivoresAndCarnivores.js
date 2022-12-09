'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, hidden) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Carnivore || obj.hidden) {
      return obj;
    };

    obj.health -= 50;

    if (!obj.health) {
      const ind = Animal.alive.indexOf(obj);

      Animal.alive.splice(ind, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
