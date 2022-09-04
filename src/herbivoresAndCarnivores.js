'use strict';

class Animal {
  constructor() {
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor() {
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(food) {
    if (food.hidden === false) {
      food.health -= 50;
    }

    if (food.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(food));
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
