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
    this.hidden = false;

    if (Animal.alive.find(el => el.health === 0)) {
      Animal.alive.splice(Animal.alive.findIndex(el => el.health === 0), 1);
    }
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(who) {
    if (who instanceof Herbivore
      && who.hidden === false) {
      who.health -= 50;
    }

    if (who.health === 0) {
      const index = Animal.alive.findIndex(el => el.health === 0);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
