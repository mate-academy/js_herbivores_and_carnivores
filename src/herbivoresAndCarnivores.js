'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }

  static removeDead(dead) {
    this.alive.splice(this.alive.indexOf(dead), 1);
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
  bite(prey) {
    if (prey instanceof Herbivore && !prey.hidden) {
      prey.health -= 50;
    }

    if (prey.health <= 0) {
      Animal.removeDead(prey);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
