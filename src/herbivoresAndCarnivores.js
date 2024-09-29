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
    Animal.alive.push(this);
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
    if (this !== this.Carnivore && this.hidden !== true) {
      this.health -= 50;

      if (this.Herbivore.name.health <= 0) {
        delete Animal.alive.name;
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
