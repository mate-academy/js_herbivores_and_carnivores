'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(target) {
    const status = target instanceof Herbivore;

    if (target.hidden === false && status) {
      target.health -= 50;
    }

    if (!target.health) {
      Animal.alive = Animal.alive.filter(el => {
        return el !== target;
      });
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
