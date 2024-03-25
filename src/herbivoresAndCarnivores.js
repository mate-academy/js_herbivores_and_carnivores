'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    this.hidden = false;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;
    }

    Animal.alive = Animal.alive.filter((element) => element.health >= 50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
