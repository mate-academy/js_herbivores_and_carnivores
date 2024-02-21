'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  isAlive() {
    return this.health > 0;
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.health = 0;
      Animal.removeFromAlive(this);
    }
  }

  static removeFromAlive(animal) {
    const index = Animal.alive.indexOf(animal);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target instanceof Carnivore) {
    } else if (target.hidden) {
    } else {
      target.decreaseHealth(50);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
