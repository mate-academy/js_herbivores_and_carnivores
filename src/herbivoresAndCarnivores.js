'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(target) {
    const damage = 50;

    if (target instanceof Herbivore && target.hidden === false) {
      target.health -= damage;

      if (target.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(target), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
