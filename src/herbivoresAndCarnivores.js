'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name) {
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(health, name, hidden = false) {
    super(health, name);
    this.hidden = hidden;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(item) {
    if (item instanceof Herbivore && !item.hidden) {
      item.health -= 50;

      if (item.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(item), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
