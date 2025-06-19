'use strict';

class Animal {
  // write your code here

  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.isAlive = true;
    Animal.alive.push(this);
  }

  takeDamage(value) {
    if (!this.isAlive) {
      return;
    }
    this.health -= value;
    this.healthCheck();
  }

  healthCheck() {
    if (this.health <= 0 && this.isAlive) {
      this.isAlive = false;

      const index = Animal.alive.indexOf(this);

      if (index !== -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    return (this.hidden = true);
  }
}

class Carnivore extends Animal {
  // write your code here

  constructor(name, herbivore) {
    super(name);
    this.herbivore = herbivore;
  }

  bite(animal, value = 50) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.takeDamage(value);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
