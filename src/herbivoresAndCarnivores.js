'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  decreaseHealth(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== this);
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

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
