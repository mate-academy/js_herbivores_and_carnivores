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

  hide(hidden = true) {
    this.hidden = hidden;
  }
}

class Carnivore extends Animal {
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.takeDamage(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
