'use strict';

class Animal {
  constructor(name) {
    this.health = 100;
    this.name = name;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        for (let i = 0; i < Animal.alive.length; i++) {
          if (Animal.alive[i].name === herbivore.name) {
            Animal.alive.splice(i, 1);
          }
        }
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
