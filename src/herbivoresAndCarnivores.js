'use strict';

class Animal {
  static alive = [];
  constructor(name, health) {
    this.name = name;
    this.health = health || 100;
    Animal.alive.push(this);
  };
}
class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  };

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  };
}

class Carnivore extends Animal {
  bite(beast) {
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
