'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
    Animal.alive.push(this);
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // eslint-disable-next-line no-useless-constructor
  constructor(name) {
    super(name);
  }

  bite(target) {
    if (!(target instanceof Animal) || target.hidden
    || target instanceof Carnivore) {
      return "Can't bite this target";
    }

    target.takeDamage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
