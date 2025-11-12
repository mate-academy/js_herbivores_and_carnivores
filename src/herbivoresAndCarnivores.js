'use strict';

class Animal {
  static alive = [];
  constructor(name = `Not Given`, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);

    if (this.health > 0 && !Animal.alive.includes(this)) {
      Animal.alive.push(this);
    }
  }
  bite(toBite) {
    if (toBite !== 0 && toBite.health !== undefined) {
      toBite.health -= 50;
    }

    if (this.health <= 0) {
      const ind = Animal.alive.indexOf(this);

      Animal.alive.splice(ind, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
