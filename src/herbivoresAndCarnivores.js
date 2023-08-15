'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}
Animal.alive = [];

const animals = Animal.alive;

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    animals.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    animals.push(this);
  }
  bite(target) {
    if (!(target instanceof Carnivore) && target.hidden === false) {
      target.health -= 50;
    }

    if (target.health === 0) {
      const index = animals.indexOf(target);

      animals.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
