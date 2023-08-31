'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  isDie(herbivore) {
    const index = Animal.alive.indexOf(herbivore);

    if (herbivore.health <= 0) {
      Animal.alive.splice(index, 1);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
      herbivore.isDie(herbivore);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
