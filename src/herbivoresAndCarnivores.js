'use strict';

class Animal {
  static alive = [];
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
  static removeDead(animal) {
    Animal.alive = Animal.alive.filter((a) => a !== animal);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(nameZhertv) {
    if ((nameZhertv instanceof Herbivore) && !nameZhertv.hidden) {
      nameZhertv.health -= 50;

      if (nameZhertv.health <= 0) {
        Animal.removeDead(nameZhertv);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
