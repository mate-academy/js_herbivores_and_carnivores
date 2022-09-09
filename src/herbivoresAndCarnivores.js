'use strict';

class Animal {
  static add(beast) {
    this.alive.push(beast);
  }

  static dead() {
    Animal.alive = this.alive.filter(obj => obj.health > 0);
  }

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.add(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(beast) {
    if (beast instanceof Herbivore
      && beast.hidden === false
      && this instanceof Carnivore) {
      beast.health -= 50;
      Carnivore.dead();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
