'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  };
};

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(nameBeast) {
    if (nameBeast.hidden === false && !(nameBeast instanceof Carnivore)) {
      nameBeast.health -= 50;

      if (nameBeast.health <= 0) {
        Animal.alive = Animal.alive.filter(beastObj => beastObj.health > 0);
      }
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
