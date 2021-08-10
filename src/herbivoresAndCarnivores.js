'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(object) {
    if (object instanceof Herbivore && object.hidden !== true) {
      object.health -= 50;
    }

    if (object.health === 0) {
      for (let i = 0; i < Animal.alive.length; i++) {
        if (Animal.alive[i].name === object.name) {
          Animal.alive.splice(i, 1);
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
