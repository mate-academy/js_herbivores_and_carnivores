'use strict';

class Animal {
  // static alive = [];

  constructor(name, health = 100) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}
Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  };

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herbi) {
    if (!(herbi instanceof Carnivore) && !herbi.hidden) {
      herbi.health -= 50;

      if (herbi.health <= 0) {
        Animal.alive.splice(Animal.alive.indexOf(herbi), 1);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
