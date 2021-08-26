'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    if (this.health > 0) {
      Animal.alive.push(this);
    }
  }

    static alive = [];
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden === false && herbivore instanceof Herbivore) {
      herbivore.health -= 50;
    }

    if (herbivore.health === 0) {
      const x = Animal.alive.indexOf(herbivore);

      Animal.alive.splice(x, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
