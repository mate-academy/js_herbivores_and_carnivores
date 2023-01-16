'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  };
  hide() {
    this.hidden
      ? this.hidden = false
      : this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }
  bite(herbivore) {
    if (
      herbivore.hidden === false
      && herbivore instanceof Herbivore
    ) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0) {
      Animal.alive = Animal.alive.filter(item => item !== herbivore);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
