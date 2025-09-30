'use strict';


class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
  
  isAlive() {
    return this.health > 0;
  }

  static removeDead(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index > -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return this.hidden;
  }
}

class Carnivore extends Animal {
    constructor(name, health) {
    super(name, health);
    }
    
  bite(target) {
    if (target instanceof Carnivore) {
      return;
    }

    if (target.hidden === true) {
      return;
    }

    if (target.health <= 0) {
      return;
    }

    const damage = 50;

    target.health -= damage;

    if (target.health <= 0) {
      target.health = 0;
      Animal.removeDead(target);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
