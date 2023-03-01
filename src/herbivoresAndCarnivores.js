'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (!herbivore.hidden
      && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.filter(({ health }) => health > 0);
      }
    }

    return this.health;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
