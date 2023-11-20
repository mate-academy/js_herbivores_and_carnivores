'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;

    return this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;

      if (herb.health <= 0) {
        // delete Animal.alive[Animal.alive.indexOf(herb)];
        Animal.alive = Animal.alive.filter((animal) => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
