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
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden === false && (herb instanceof Herbivore)) {
      herb.health -= 50;
    }
    Animal.alive = Animal.alive.filter(elem => elem.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
