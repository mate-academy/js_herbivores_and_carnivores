'use strict';

class Animal {
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {

}

class Carnivore extends Animal {

}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
