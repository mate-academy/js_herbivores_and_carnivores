'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(herbivore) {
    if ((herbivore.hidden === false)) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i] === herbivore) {
            Animal.alive.splice(i, 1);
          }
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
