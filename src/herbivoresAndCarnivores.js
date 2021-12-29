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
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(animal) {
    if (animal.__proto__ !== this.__proto__ && animal.hidden === false) {
      animal.health -= 50;
    }

    const newArr = Animal.alive.filter(item => item.health > 0);

    Animal.alive = newArr;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
