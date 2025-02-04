'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }

  die() {
    Animal.alive = Animal.alive.filter((animal) => animal !== this);
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
    if (!(obj instanceof Herbivore)) {
      return;
    }

    if (obj.hidden) {
      return;
    }

    obj.health -= 50;

    if (obj.health <= 0) {
      obj.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
