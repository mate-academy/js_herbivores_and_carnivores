'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  static dellete() {
    Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
  }
}
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
      Animal.dellete();

      return `${this.name} bit ${target.name}`;
    } else {
      return `${this.name} can't bite ${target.name}`;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
