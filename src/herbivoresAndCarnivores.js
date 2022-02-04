'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static alive = [this];

  static chekAlive() {
    Animal.alive = Animal.alive.filter(alimal => alimal.health > 0);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore instanceof Herbivore && !herbivore.hidden) {
      herbivore.health -= 50;
    }
    Animal.chekAlive();
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
