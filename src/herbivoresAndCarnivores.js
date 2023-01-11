'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = false;
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;
    }
    Animal.alive = Animal.alive.filter(ani => ani.health > 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
