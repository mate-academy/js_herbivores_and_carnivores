'use strict';

class Animal {
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.addAlive(this);
  }
}

Animal.alive = [];

Animal.addAlive = function(alive) {
  this.alive.push(alive);
};

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
  bite(beast) {
    if (beast instanceof Herbivore
        && beast.hidden === false) {
      beast.health -= 50;
    }

    if (beast.health <= 0) {
      const dead = Animal.alive.findIndex((el) => el.health <= 0);

      Animal.alive.splice(dead, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
