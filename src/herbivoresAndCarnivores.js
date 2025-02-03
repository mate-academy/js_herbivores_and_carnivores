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
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health = obj.health - 50;

      if (obj.health <= 0) {
        Animal.alive = Animal.alive.filter((x) => x !== obj);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
