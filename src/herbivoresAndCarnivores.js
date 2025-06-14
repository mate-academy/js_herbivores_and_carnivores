'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
  }

  bite(target) {
    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= 50;

      if (target.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== target);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
