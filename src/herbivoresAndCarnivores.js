'use strict';

class Animal {
  static alive = [];
  static counter = 0;
  // write your code here
  constructor(name) {
    this.id = Animal.counter;
    Animal.counter += 1;
    this.health = 100;
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(prey) {
    if (prey instanceof Carnivore || !(prey instanceof Herbivore)) {
      return;
    }

    if (prey.hidden === false) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.alive = Animal.alive.filter((item) => item.id !== prey.id);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
