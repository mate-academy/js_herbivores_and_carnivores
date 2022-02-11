'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden) {
    super(name, health, hidden);
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(herbivore) {
    if ((herbivore.hidden === false
      && herbivore.constructor.name === 'Herbivore')) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.map(el => {
          if (el === herbivore) {
            Animal.alive.splice(el, 1);
          }
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
