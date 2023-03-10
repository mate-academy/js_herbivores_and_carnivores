'use strict';

class Animal {
  static alive =[]

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health) {
      Animal.alive.push(this);
    }
  }
  // write your code here
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  } // write your code here
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(food) {
    if (!(food instanceof Carnivore || food.hidden)) {
      food.health -= 50;
    }

    if (!food.health) {
      Animal.alive.pop(food);
    }// write your code here
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
