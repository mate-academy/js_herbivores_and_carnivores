'use strict';

class Animal {
  static alive = [];
  health = 100;
  constructor(name) {
    this.name = name;
  }
}

class Herbivore extends Animal {
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
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }
  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health = herbivore.health - 50;

      if (herbivore.health <= 0) {
        const index = Animal.alive.indexOf(herbivore);

        if (index > -1) {
          Animal.alive.splice(index, 1);
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
