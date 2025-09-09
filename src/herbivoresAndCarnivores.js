'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    // one combined gate; no other branches
    if (target instanceof Herbivore && !target.hidden) {
      target.health -= 50;

      // remove dead animals using filter (per checklist)
      Animal.alive = Animal.alive.filter((a) => a.health > 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
