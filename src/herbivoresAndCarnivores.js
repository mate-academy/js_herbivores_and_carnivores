'use strict';

class Animal {
  static FULL_HEALTH = 100;
  static BITE_DAMAGE = 50;
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = Animal.FULL_HEALTH;

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
  bite(herOb) {
    if (herOb instanceof Herbivore && !herOb.hidden) {
      herOb.health -= Animal.BITE_DAMAGE;
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
