'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(herb) {
    if (herb instanceof Herbivore) {
      if (herb.hidden !== true) {
        herb.health -= 50;

        if (herb.health <= 0) {
          const animalsLeftAlive = Animal.alive.filter((a) => a.health > 0);

          Animal.alive = animalsLeftAlive;
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
