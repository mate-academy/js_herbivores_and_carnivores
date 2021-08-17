'use strict';

class Animal {
  static isLive() {
    this.alive = this.alive.filter(anim => anim.health > 0);
  }

  constructor(name, health) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(creature) {
    if (creature.hidden === false) {
      creature.health -= 50;
      Animal.isLive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
