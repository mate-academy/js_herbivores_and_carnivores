'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name = 'Animal', health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  dieIfNeeded() {
    if (this.health <= 0) {
      const index = Animal.alive.indexOf(this);

      if (index > -1) {
        Animal.alive.splice(index, 1);
      }
    }
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      prey.dieIfNeeded();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
