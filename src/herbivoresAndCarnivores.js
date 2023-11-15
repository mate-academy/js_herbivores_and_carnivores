'use strict';

class Animal {
  constructor(name, health = 100) {
    this.health = health;
    this.name = name;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super();
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super();
    this.name = name;

    Animal.alive.push(this);
  }

  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;
    };

    Animal.alive.filter((el, i) => {
      if (el.health === 0) {
        Animal.alive.splice(i, 1);
      }
    });
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
