'use strict';

class Animal {
  // write your code here

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive=[];
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    this.type = 'Herbivore';
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  constructor(name, health) {
    super(name, health);
    this.type = 'Carnivore';
  }

  bite(animal) {
    if (animal.type === 'Herbivore') {
      if (animal.hidden !== true && animal.health > 0) {
        animal.health -= 50;
        Animal.alive = Animal.alive.filter(animals => animals.health > 50);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
