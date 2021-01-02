'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore
      && herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        return Animal.alive.splice(Animal.alive.indexOf(herbivore), 1);
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
