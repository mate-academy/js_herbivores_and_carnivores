'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static adder(instance) {
    this.alive.push(instance);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.adder(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.adder(this);
  }

  bite(instance) {
    if (!(instance instanceof Carnivore) && instance.hidden === false) {
      Animal.alive = Animal.alive.filter(element => {
        if (element.name === instance.name) {
          element.health -= 50;
        }

        return element.health > 0;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
