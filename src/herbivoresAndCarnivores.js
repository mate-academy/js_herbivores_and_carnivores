'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
