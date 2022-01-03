'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.hidden = false;
  }

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(target) {
    if (target.hidden === false && (target instanceof Herbivore)) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive = Animal.alive.filter(animal => animal.name !== target.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
