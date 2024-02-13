'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;

    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hasOwnProperty('hidden') && !herbivore.hidden) {
      herbivore.health -= 50;

      if (herbivore.health === 0) {
        const index = Animal.alive.indexOf(herbivore);

        if (index !== -1) {
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
