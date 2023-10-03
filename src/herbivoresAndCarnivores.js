'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    if (this.hidden) {
      this.hidden = false;

      return;
    }

    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && herbivore.hidden === false) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = [...Animal.alive].filter(animal => {
          return animal.name !== herbivore.name;
        });
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
