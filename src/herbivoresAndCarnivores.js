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
  constructor(name, health) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(x) {
    if (x.hidden === false) {
      Animal.alive.forEach(element => {
        if (element.name === x.name) {
          element.health -= 50;
        }
      });
    }

    const result = Animal.alive.filter(elem => elem.health > 0);

    Animal.alive = result;
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
