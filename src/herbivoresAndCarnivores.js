'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
  }
}

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

  bite(obj) {
    if (!obj.hidden && !(obj instanceof Carnivore)) {
      obj.health -= 50;
      Animal.alive = Animal.alive.filter(animal => animal.health > 0);
    }
  }
}

Animal.alive = [];

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
