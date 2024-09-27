'use strict';
// const deer = new Herbivore('Bembi');
// const panther = new Carnivore('Bagira');
// const lion = new Carnivore('King');
// const rabbit = new Herbivore('Max');

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    this.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super();
    this.hidden = hidden;
  }

  hide() {
    this.hidden = false;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super();
  }

  bite() {
    if (this !== Carnivore && this.hidden !== true) {
      this.health -= 50;

      if (this.Animal.health <= 0) {
        delete this.alive[this.name];
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
