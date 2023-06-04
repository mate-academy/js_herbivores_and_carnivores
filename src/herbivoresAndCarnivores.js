'use strict';
class Animal {
  constructor(health, name, hidden) {
    this.name = name;
    this.hidden = hidden || false;
    this.health = health || 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name, hidden);
    this.name = name;
    this.hidden = hidden || false;
    this.health = 100;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name, hidden) {
    super(health, name, hidden);
    this.name = name;
    this.hidden = hidden || false;
    this.health = 100;
    Animal.alive.push(this);
  }

  bite(object) {
    if (object instanceof Herbivore && object.hidden === false) {
      object.health = object.health - 50;

      if (object.health === 0) {
        Animal.alive = Animal.alive.filter(item => item.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
