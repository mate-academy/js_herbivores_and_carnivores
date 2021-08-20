'use strict';

class Animal {
  constructor(name) {
    Animal.alive.push(this);

    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }
  hide() {
    if (this.hidden === false) {
      this.hidden = true;
    } else {
      this.hidden = false;
    }
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (!(obj instanceof Carnivore) && obj.hidden === false) {
      obj.health -= 50;

      if (obj.health === 0) {
        const diedAnimal = Animal.alive.findIndex(el => el.health === 0);

        Animal.alive.splice(diedAnimal, 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
