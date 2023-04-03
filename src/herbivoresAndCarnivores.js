'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
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
    if (herbivore.hasOwnProperty('hidden') === true
      && herbivore.hidden !== true) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        const death = Animal.alive.indexOf(herbivore);

        Animal.alive.splice(death, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
