'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  bite(object) {
    if (!object.hidden && !(object instanceof Carnivore)) {
      object.health -= 50;

      if (object.health <= 0) {
        Animal.alive = Animal.alive.filter(elem => elem !== object);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
