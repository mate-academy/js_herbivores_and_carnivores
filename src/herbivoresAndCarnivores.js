'use strict';

class Animal {
  static totalList = [];
  static alive = totalList.filter(animal => animal.health > 0);

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.totalList.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health)
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
