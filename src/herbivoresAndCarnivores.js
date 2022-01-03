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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(beast) {
    if (beast instanceof Herbivore && beast.hidden === false) {
      beast.health -= 50;

      if (beast.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(beast), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
