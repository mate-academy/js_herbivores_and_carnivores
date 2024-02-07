'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive.splice(Animal.alive.indexOf(this), 1);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        herbivore.die();
      }

      return true;
    }

    return false;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
