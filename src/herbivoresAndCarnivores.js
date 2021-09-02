'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hide = false) {
    super(name, health);
    this.hidden = hide;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(param) {
    if (param.hasOwnProperty('hidden') && !param.hidden) {
      param.health -= 50;
      Animal.alive = Animal.alive.filter(elem => elem.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
