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
    super();
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
  }

  bite(alien) {
    if (alien instanceof Herbivore && alien.hidden === false) {
      alien.health -= 50;
    }

    if (alien.health <= 0) {
      Animal.alive.splice(Animal.alive.indexOf(alien), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
