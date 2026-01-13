'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(object) {
    if (object instanceof Herbivore && object.hidden === false) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item !== object);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
