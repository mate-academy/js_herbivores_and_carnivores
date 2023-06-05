'use strict';
class Animal {
  constructor(health, name, hidden) {
    this.name = name;
    this.hidden = hidden || false;
    this.health = 100 || health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
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
