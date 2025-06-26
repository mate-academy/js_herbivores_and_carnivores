'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
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
  bite(object) {
    if (object instanceof Herbivore && object.hidden === false) {
      object.health -= 50;
    }

    if (object.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== object);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
