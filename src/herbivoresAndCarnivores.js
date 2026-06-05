'use strict';

class Animal {
  constructor(name, health = 100, hidden) {
    this.health = health;
    this.name = name;
    this.hidden = false;

    Animal.alive.push(this);
  }
}

Animal.alive = [];
class Herbivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
  }

  bite(alvo) {
    if (alvo instanceof Carnivore) {
      return;
    }

    if (alvo.hidden === true) {
      return;
    }

    alvo.health -= 50;

    if (alvo.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== alvo);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
