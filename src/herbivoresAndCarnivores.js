'use strict';

class Animal {
  constructor(name, health = 100) {
    if (!Animal.alive) {
      Animal.alive = [];
    }

    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(herbivoreType) {
    if (!herbivoreType.hidden && herbivoreType instanceof Herbivore) {
      herbivoreType.health -= 50;

      if (herbivoreType.health <= 0) {
        Animal.alive = Animal.alive.filter(x => x.name !== herbivoreType.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
