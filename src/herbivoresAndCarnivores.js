'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(animal) {
    if ((animal instanceof Herbivore === true) && animal.hidden === false) {
      animal.health = animal.health - 50;

      if (animal.health === 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (animal === Animal.alive[i]) {
            Animal.alive.splice(i, 1);
            break;
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
