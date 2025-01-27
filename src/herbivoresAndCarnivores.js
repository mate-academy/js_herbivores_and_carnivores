'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }

  takeDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;
    }

    if (obj.health <= 0) {
      obj.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
