'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  }
  die() {
    Animal.alive = Animal.alive.filter(element => element.health !== 0);
  }
}
Animal.alive = [];
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
  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;
    }
    target.die();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
