'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  die() {
    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
    }
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
  unhide() {
    this.hidden = false;
  }
}
class Carnivore extends Animal {
  bite(victim) {
    if (!(victim instanceof Herbivore)) {
      return;
    }

    if (victim.hidden) {
      return;
    }
    victim.hidden = false;
    victim.health -= 50;
    victim.die();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
