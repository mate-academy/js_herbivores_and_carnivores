'use strict';

class Animal {
  static alive = [];

  constructor(name, createdBy) {
    this.name = name;
    this.health = 100;
    this.createdBy = createdBy;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name, 'Herbivore');
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name, 'Carnivore');
    Animal.alive.push(this);
  }

  bite(victim) {
    if (victim.createdBy === 'Carnivore') {
      return;
    }

    if (victim.hidden) {
      return;
    }

    victim.health -= 50;

    if (victim.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
