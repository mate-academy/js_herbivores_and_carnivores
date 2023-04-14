'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }

  static alive = [];
}


class Herbivore extends Animal {
  type = 'Herbivore';
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = true
  }
}


class Carnivore extends Animal {
  type = 'Carnivore';
  constructor(name, health) {
    super(name, health)
    Animal.alive.push(this);
  }

  bite(object) {
    if (object.type !== 'Carnivore' && object.hidden !== true) {
      object.health -= 50;
      if (object.health === 0) {
        Animal.alive.splice(Animal.alive.indexOf(object), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
