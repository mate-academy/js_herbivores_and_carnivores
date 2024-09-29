'use strict';
// const deer = new Herbivore('Bembi');
// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

class Animal {
  static #alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.#alive.push(this);
  }
}

class Herbivore extends Animal {
  name = this.name;
  health = this.health;
  hidden = false;

  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super();
  }

  bite() {
    // if (this !== Animal.Carnivore && this.hidden !== true) {
      this.Carnivore.health -= 50;

      if (this.Carnivore.health <= 0) {
        delete Animal.alive[this.name];
      }
    // }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
