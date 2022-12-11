'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static checkDead() {
    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health === 0) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(animal) {
    if (animal.hidden === false && animal instanceof Herbivore) {
      animal.health -= 50;
    }

    Animal.checkDead();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
