'use strict';

class Animal {
  constructor(name) {
    this.name = name;
    this.health = 100;

    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name) {
    super(name);

    this.hidden = false;
  }
}

Herbivore.prototype.hide = function() {
  if (this.hidden) {
    this.hidden = false;
  } else {
    this.hidden = true;
  }
};

class Carnivore extends Animal {}

Carnivore.prototype.bite = function(prey) {
  if (!prey.hidden && !(prey instanceof Carnivore)) {
    prey.health -= 50;

    if (prey.health === 0) {
      Animal.alive.splice(Animal.alive.indexOf(prey), 1);
    }
  }
};

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
