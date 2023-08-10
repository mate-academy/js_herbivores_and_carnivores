'use strict';

class Animal {
  // write your code here
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  };
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, hidden = false) {
    super(100, name);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !(this.hidden);
  }
}

class Carnivore extends Animal {
  constructor(name) {
    // dlaczego to dziala?
    super(100, name);
    Animal.alive.push(this);
  }

  bite(herbivoreobj) {
    if (herbivoreobj.hidden === false) {
      herbivoreobj.health -= 50;

      if (herbivoreobj.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal !== herbivoreobj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
