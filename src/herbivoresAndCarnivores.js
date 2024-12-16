'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
  isAlive() {
    return this.health > 0;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  unhide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
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
