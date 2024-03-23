'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.health = 100;
    this.name = name;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);

    Animal.alive.push(this);
  }

  bite(herbivore) {
    if (!herbivore.hidden && !(herbivore instanceof Carnivore)) {
      herbivore.health -= 50;

      if (herbivore.health < 1) {
        Animal.alive.splice(
          Animal.alive.findIndex((e) => e === herbivore),
          1,
        );
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
