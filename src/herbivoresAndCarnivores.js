'use strict';
class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;

    Animal.alive.push(this);
  };
};

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      Animal.alive = Animal.alive.filter(beast => beast.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
