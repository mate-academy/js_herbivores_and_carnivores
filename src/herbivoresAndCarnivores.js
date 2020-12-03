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
  constructor(name, health = 100) {
    super(name, health);

    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && obj.hidden === false) {
      obj.health -= 50;
    }

    if (obj.health === 0) {
      const index = Animal.alive.findIndex(el => el.health === 0);

      delete Animal.alive[index];
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
