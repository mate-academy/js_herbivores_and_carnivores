'use strict';

class Animal {
  constructor(name) {
    this.name = name;
  }

  health = 100;

  static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(beast) {
    if (!(beast instanceof Carnivore)
      && !beast.hidden
      && Animal.alive.includes(beast)
    ) {
      beast.health -= 50;

      if (beast.health === 0) {
        const index = Animal.alive.indexOf(beast);

        Animal.alive.splice(index, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
