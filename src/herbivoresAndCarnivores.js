'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  };
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  };
}

class Carnivore extends Animal {
  bite(beast) {
    if (beast.health <= 0) {
      Animal.alive = Animal.alive.filter((element) => element.health !== 0);

      return 0;
    }

    if (beast.hidden !== true && beast instanceof Herbivore) {
      beast.health -= 50;
    }
    Animal.alive = Animal.alive.filter((element) => element.health !== 0);
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
