'use strict';

class Animal {
  static add(animal) {
    this.alive.push(animal);
  }

  static remove() {
    this.alive.splice(
      this.alive.indexOf(
        this.alive.filter(herbivore => !herbivore.health))
      , 1);
  }

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.add(this);
  }

  hide() {
    this.hidden = !(this.hidden);

    return this;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.add(this);
  }

  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }

    if (!herbivore.health) {
      Animal.remove();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
