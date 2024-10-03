'use strict';

class Animal {
  // write your code here
  health = 100;
  static alive = [];

  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== herbivore);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
