'use strict';

class Animal {
  // write your code here
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }

  static alive = [];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;

    Animal.alive.push(this);
  }
  hide(hidden) {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health, hidden);
    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
