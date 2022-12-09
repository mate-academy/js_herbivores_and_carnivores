'use strict';

class Animal {
  // write your code here
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
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
