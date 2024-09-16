'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (victim instanceof Herbivore
      && victim.hidden === false) {
      victim.health -= 50;
    }

    Animal.alive = Animal.alive.filter(anim => anim.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
