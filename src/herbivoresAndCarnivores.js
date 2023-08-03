'use strict';

class Animal {
  // write your code here
  static RemoveDead(animal) {
    Animal.alive.splice(Animal.alive.indexOf(animal), 1);
  }
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

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
  // write your code here
  bite(object) {
    if (!object.hidden && !(object instanceof Carnivore)) {
      object.health -= 50;

      if (object.health <= 0) {
        Animal.RemoveDead(object);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
