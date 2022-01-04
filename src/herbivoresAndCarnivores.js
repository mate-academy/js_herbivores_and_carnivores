'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden ? this.hidden = false : this.hidden = true;
  }
}

class Carnivore extends Animal {
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
