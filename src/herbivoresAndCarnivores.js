'use strict';

class Animal {
  constructor(name, health = 100) {
    Animal.alive.push(this);
    this.name = name;
    this.health = health;
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
  }

  static alive = [];
}

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

  bite(target) {
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      if (target.health <= 0) {
        target.die();
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
