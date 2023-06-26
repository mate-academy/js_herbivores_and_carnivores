'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health = 100, hidden = false) {
    super(name, health);
    this.hidden = hidden;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(name, health = 100) {
    super(name, health);
    Animal.alive.push(this);
  }
  bite(injured) {
    if (injured instanceof Herbivore && !injured.hidden) {
      injured.health -= 50;
    }

    if (injured.health <= 0) {
      Animal.alive = Animal.alive.filter(animal => animal !== injured);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
