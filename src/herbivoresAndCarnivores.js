'use strict';

class Animal {
  static alive = [];
  // write your code here
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
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

  bite(object) {
    if (object instanceof Herbivore && !object.hidden) {
      object.health -= 50;

      if (object.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== object);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
