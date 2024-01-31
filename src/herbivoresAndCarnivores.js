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
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if ('hidden' in herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;
    }
    Animal.alive = Animal.alive.filter(({ health }) => health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
