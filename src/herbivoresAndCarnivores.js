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
  constructor(name, hidden = false) {
    super(name);
    this.hidden = hidden;
  }

  hide() {
    if (!this.hidden) {
      this.hidden = true;
    }
  };
};

class Carnivore extends Animal {
  bite(beast) {
    if (!beast.hidden && !(beast instanceof Carnivore)) {
      beast.health -= 50;
    }

    if (beast.health === 0) {
      Animal.alive = Animal.alive.filter(creature => creature !== beast);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
