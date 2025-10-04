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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  // write your code here
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
      if (herbivore.health <= 0) {
        const index = Animal.alive.indexOf(herbivore);
        if (index > -1) {
          Animal.alive = Animal.alive.filter(animal => animal.health > 0);
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
