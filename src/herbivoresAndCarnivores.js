'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    for (const el of Animal.alive) {
      if (this.name === el.name) {
        el.hidden = true;
      }
    }
  }
}

class Carnivore extends Animal {
  bite(animalInDang) {
    for (const el of Animal.alive) {
      if (animalInDang.name === el.name && el.hidden === false) {
        el.health -= 50;

        if (el.health === 0) {
          Animal.alive.splice(Animal.alive.indexOf(el), 1);
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
