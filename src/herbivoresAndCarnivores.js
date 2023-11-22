'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  };

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(name) {
    if (name instanceof Herbivore) {
      if (name.hidden === false) {
        name.health -= 50;
      }
    }

    if (name.health <= 0) {
      const tmp = Animal.alive.indexOf(name);

      Animal.alive.splice(tmp, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
