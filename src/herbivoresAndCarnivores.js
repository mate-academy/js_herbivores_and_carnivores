'use strict';

class Animal {
  constructor(health = 100, name) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}
Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(health, name);

    this.hidden = hidden;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(health, name);
  }

  bite(herbivore) {
    if (herbivore.hidden === false) {
      herbivore.health -= 50;
      Animal.alive = Animal.alive.filter(item => item.health !== 0);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
