'use strict';

class Animal {
  // write your code here
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
      Animal.alive = Animal.alive.filter((el) => el.health);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
