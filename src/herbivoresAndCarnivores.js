'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

Animal.alive = [];

Animal.aliveOnlyFilter = function() {
  this.alive = this.alive.filter(beast => beast.health > 0);
};

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
    Animal.alive.push(this);
  }

  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  constructor(name) {
    super(name);
    Animal.alive.push(this);
  }

  bite(prey) {
    if (prey instanceof Herbivore && prey.hidden === false) {
      prey.health -= 50;
      Animal.aliveOnlyFilter();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
