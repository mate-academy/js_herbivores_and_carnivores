'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(object) {
    if (object instanceof Herbivore && object.hidden !== true) {
      object.health -= 50;

      if (object.health <= 0) {
        Animal.alive = Animal.alive.filter((element) => element !== object);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
