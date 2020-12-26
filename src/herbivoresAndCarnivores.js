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
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(beast) {
    if (!(beast instanceof Carnivore)) {
      if (!beast.hidden) {
        beast.health -= 50;

        if (beast.health === 0) {
          const deadAnimalIndex = Animal.alive.findIndex(el => el.health === 0);

          Animal.alive.splice(deadAnimalIndex, 1);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
