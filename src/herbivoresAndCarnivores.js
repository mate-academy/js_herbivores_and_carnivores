'use strict';

class Animal {
  // write your code here

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(victim) {
    if (victim.hidden !== true && victim instanceof Herbivore) {
      victim.health -= 50;

      if (victim.health === 0) {
        // for (const beast of Animal.alive) {
        //   if (beast.health > 0) {
        //     arrayOfAliveAnimal.push(beast);
        //   }
        // }
        Animal.alive = Animal.alive.filter((beast) => beast.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
