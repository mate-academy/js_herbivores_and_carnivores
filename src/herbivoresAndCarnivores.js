'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

Animal.removeAnimal = function(objToRemove) {
  delete this.alive[Animal.alive.indexOf(objToRemove)];
};

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (!obj.hidden && !(obj instanceof Carnivore)) {
      obj.health -= 50;

      if (obj.health === 0) {
        Animal.removeAnimal(obj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
