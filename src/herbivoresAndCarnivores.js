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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden === true) {
      this.hidden = false;
    };
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(prey) {
    if (prey.hidden === false) {
      prey.health -= 50;

      if (prey.health === 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i].name === prey.name) {
            Animal.alive.splice(i, 1);
          }
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
