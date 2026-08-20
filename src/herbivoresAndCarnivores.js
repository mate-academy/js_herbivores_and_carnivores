'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.anim = 'Herbivore';
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.anim = 'Carnivore';
  }
  bite(target) {
    if (target.anim !== 'Carnivore' && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter((x) => x !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
