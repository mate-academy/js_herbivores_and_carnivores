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
  constructor(name) {
    super(name);

    this.type = 'herbivore';
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);

    this.type = 'carnivore';
  }

  bite(target) {
    if (target.type !== 'carnivore' && target.hidden !== true) {
      target.health -= 50;
    }

    if (target.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(target));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
