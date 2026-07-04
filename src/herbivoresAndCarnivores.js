'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;

    Animal.alive.push(this);
  }

  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }

  takeDamage(amount) {
    if (this.health <= 0) {
      return;
    }
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }
}

class Herbivore extends Animal {
  hide() {
    this.hidden = true;

    return `${this.name} is hiding!`;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (this.health <= 0) {
      return `${this.name} is dead and cannot bite!`;
    }

    if (!(target instanceof Herbivore)) {
      return `${this.name} can't bite another carnivore!`;
    }

    if (target.hidden) {
      return `${target.name} is hidden, ${this.name} can't find it!`;
    }

    target.takeDamage(50);

    return `${this.name} bites ${target.name}!`;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
