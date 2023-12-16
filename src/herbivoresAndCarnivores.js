'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (!Animal.alive) {
      Animal.alive = [];
    }
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  bite(target) {
    if (target instanceof Carnivore
      || (target instanceof Herbivore && target.hidden)) {
      return;
    }

    target.health -= 50;

    if (target.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
