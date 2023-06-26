'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  die() {
    const position = Animal.alive.indexOf(this);

    if (position !== -1) {
      Animal.alive.splice(position, 1);
    }
  }

  decreaseHp(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
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
    if (beast instanceof Carnivore || beast.hidden) {
      return;
    }

    beast.decreaseHp(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
