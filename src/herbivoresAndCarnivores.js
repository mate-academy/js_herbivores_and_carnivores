'use strict';

class Animal {
  static alive = [];
  constructor(health, name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }

  decreaseHealth(amount) {
    const index = Animal.alive.indexOf(this.name);

    if (!this.hidden) {
      this.health -= amount;

      if (this.health === 0) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Carnivore extends Animal {
  bite(victim) {
    if (victim.constructor.name === 'Herbivore') {
      victim.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
