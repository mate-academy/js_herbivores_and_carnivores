'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, hidden = false) {
    super(name);

    this.hidden = hidden;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !(herbivore.hidden)) {
      herbivore.health -= 50;
    }

    if (herbivore.health <= 0 && Animal.alive.includes(herbivore)) {
      Animal.alive = Animal.alive.filter(animal => animal !== herbivore);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
