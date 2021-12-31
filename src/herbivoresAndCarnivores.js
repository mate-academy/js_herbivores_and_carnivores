'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor() {
    super();
    Animal.alive.push(this);
  }
  bite(victim) {
    if (!victim.hidden && !(victim instanceof Carnivore)) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(victim), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
