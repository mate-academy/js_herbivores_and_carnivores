'use strict';

class Animal {
  static alive = [];

  constructor(name, health) {
    Animal.alive.push(this);

    this.name = name;
    this.health = health || 100;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.x = 1;
  }

  bite(herOb) {
    if (!(herOb instanceof Carnivore) && !herOb.hidden) {
      herOb.health -= 50;
    }

    if (herOb.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(herOb), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
