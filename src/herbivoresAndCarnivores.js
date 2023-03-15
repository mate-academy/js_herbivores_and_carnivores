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
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(bittenAnimal) {
    if (bittenAnimal instanceof Herbivore && bittenAnimal.hidden === false) {
      bittenAnimal.health -= 50;
    }
    Animal.alive = Animal.alive.filter(el => el.health !== 0);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
