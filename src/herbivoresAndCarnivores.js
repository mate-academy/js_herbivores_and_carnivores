'use strict';

class Animal {
  static alive = [];
  static checkingHealth() {
    Animal.alive = Animal.alive.filter(anim => anim.health > 0);
  }

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
  bite(animal) {
    if (animal instanceof Herbivore && animal.hidden === false) {
      animal.health -= 50;
    }
    Animal.checkingHealth();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
