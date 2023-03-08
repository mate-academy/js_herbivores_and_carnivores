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
    this.health = 100;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(herb) {
    if (herb.hidden || herb instanceof Carnivore) {
      return;
    } herb.health -= 50;

    if (herb.health === 0) {
      Animal.alive = Animal.alive.filter(f => f.name !== herb.name);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
