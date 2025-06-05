'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(alvo) {
    if (alvo instanceof Herbivore && alvo.hidden === false) {
      alvo.health -= 50;

      if (alvo.health <= 0) {
        Animal.alive = Animal.alive.filter((x) => x !== alvo);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
