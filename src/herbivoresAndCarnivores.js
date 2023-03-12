'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health) {
    super(name, health);
    Animal.alive.push(this);
  }

  bite(sameObject) {
    if (sameObject instanceof Herbivore & sameObject.hidden === false) {
      sameObject.health -= 50;

      Animal.alive = Animal.alive.filter(item => item.health !== 0);
    }
  };
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
