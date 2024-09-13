'use strict';

class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }

  demage(amout) {
    this.health -= amout;

    if (this.health <= 0) {
      const indexOfThis = Animal.alive.indexOf(this);

      Animal.alive.splice(indexOfThis, 1);
    }
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
  bite(obj) {
    if (obj instanceof Carnivore || obj.hidden) {
      return;
    }

    obj.demage(50);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
