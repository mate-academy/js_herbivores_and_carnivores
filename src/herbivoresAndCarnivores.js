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
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    Animal.alive.forEach(el => {
      if (!el.hidden && herbivore instanceof Herbivore) {
        el.health -= 50;
      }
    });
    Animal.alive = Animal.alive.filter(el => el.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
