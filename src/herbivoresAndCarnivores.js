'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(this), 1);
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
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.decreaseHealth(50);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
