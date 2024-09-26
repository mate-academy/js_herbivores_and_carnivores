'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  };
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Herbivore && object.hidden === false) {
      object.health -= 50;
    }
    Animal.alive = Animal.alive.filter(x => x.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
