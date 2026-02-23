'use strict';

class Animal {
  // write your code here
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here

  bite(alvo) {
    if (alvo instanceof Herbivore && !alvo.hidden) {
      alvo.health -= 50;

      if (alvo.health <= 0) {
        Animal.alive = Animal.alive.filter((animal) => animal !== alvo);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
