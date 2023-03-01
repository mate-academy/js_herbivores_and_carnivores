'use strict';

class Animal {
  static remove() {
    Animal.alive = Animal.alive.filter(x => x.health !== 0);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
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
  bite(beast) {
    if (!beast.hidden && beast instanceof Herbivore) {
      beast.health -= 50;

      if (beast.health === 0) {
        Animal.remove();
      }
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
