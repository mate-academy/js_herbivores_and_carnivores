'use strict';

class Animal {
  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
  static alive = [];
  static checkHealth() {
    this.alive = this.alive.filter((el) => el.health > 0);
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
      Animal.checkHealth();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
