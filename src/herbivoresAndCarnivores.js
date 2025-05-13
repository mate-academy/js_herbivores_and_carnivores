'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100, hidden = false) {
    this.name = name;
    this.health = health;
    this.hidden = hidden;
  }

  isAlive() {
    Animal.alive = Animal.alive.filter((a) => a.health > 0);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden) {
    super(name, health, hidden);
    this.name = name;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.name = name;
    Animal.alive.push(this);
  }

  bite(herb) {
    if (herb instanceof Herbivore && herb.hidden === false) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      this.isAlive();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
