'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(victim) {
    if (!(victim instanceof Carnivore) && victim.hidden === false) {
      victim.health -= 50;
    }

    if (victim.health <= 0) {
      const index = Animal.alive.indexOf(victim);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
