'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(health, name);
    this.name = name;
    this.health = health;
  }

  bite(prey) {
    if (prey.hidden === false
      && prey.__proto__ === Herbivore.prototype) {
      prey.health -= 50;
    };

    for (let i = 0; i < Animal.alive.length; i++) {
      if (Animal.alive[i].health === 0) {
        Animal.alive.splice(i, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
