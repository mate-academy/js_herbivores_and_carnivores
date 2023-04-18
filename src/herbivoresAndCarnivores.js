'use strict';

class Animal {
  // static alive = [];
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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj.hasOwnProperty('hidden')) {
      if (!obj.hidden && obj.health) {
        obj.health -= 50;
      }
    }

    Animal.alive = Animal.alive.filter(el => el.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
